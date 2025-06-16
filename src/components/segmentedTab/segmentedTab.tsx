import React from "react";
import {Pressable, StyleProp, Text, View, ViewStyle} from "react-native";
import ThemeContext from "../context/context";
import {SegmentedTabProps, TabOption} from "./types";
import LinearGradient from "react-native-linear-gradient";
import Animated, {Easing, useAnimatedStyle, withTiming} from "react-native-reanimated";
import {padding} from "../spacing/padding";

const SegmentedTab = (props: SegmentedTabProps) => {
    const options = props.options;
    const context = React.useContext(ThemeContext);
    const textColor = props.activeTextColor ? props.activeTextColor : context.theme.TextColor;
    const colors = props.colors ? Array.isArray(props.colors) ? props.colors : [props.colors, props.colors] : [context.theme.Primary, context.theme.Primary];
    const initialValue = props.defaultValue != undefined ? props.defaultValue : options[0] ? typeof options[0] === "string" || typeof options[0] === "number" ? options[0] : options[0].value : undefined;
    const [selected, setSelected] = React.useState(initialValue);
    const value = props.value != undefined ? props.value : selected;

    const containerStyle: StyleProp<ViewStyle> = [{
        backgroundColor: context.theme.TextColor + "0D",
        width: "100%",
        flexDirection: "row"
    }, props.containerStyle];

    const itemStyle: StyleProp<ViewStyle> = {flex: 1, alignItems: "center", justifyContent: "center"};

    const onChange = (val: string | number) => {
        if (val === value) {
            return;
        }
        setSelected(val);
        if (props.onChange) {
            props.onChange(val);
        }
    };
    const index = options.findIndex((item: TabOption) => typeof item == "string" || typeof item == "number" ? item == value : item.value === value);
    const len = options.length;
    const activetabStyle = useAnimatedStyle(() => {
        return {
            left: withTiming((index * 100 / len) + "%", {
                duration: 500,
                easing: Easing.out(Easing.exp),
            })
        };

    });
    return (
        <View style={[containerStyle, props.borderRadius ? {borderRadius: props.borderRadius} : undefined]}>
            <Animated.View style={[
                {
                    width: (100 / options.length) + "%",
                    position: "absolute",
                    height: "100%",
                    left: 0,
                    top: 0
                },
                activetabStyle,
                props.borderRadius ? {borderRadius: props.borderRadius} : undefined
            ]}>
                <LinearGradient
                    colors={colors}
                    start={props.start ? props.start : {x: 0, y: 0.5}}
                    end={props.end ? props.end : {x: 1, y: 0.5}}
                    style={[{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                    }, props.borderRadius ? {borderRadius: props.borderRadius} : undefined]}
                />
            </Animated.View>
            {
                options.map((item: TabOption) => {
                    if (typeof item === "string" || typeof item === "number") {
                        return <Pressable style={itemStyle} key={item} onPress={() => onChange(item)}>
                            <Text
                                style={{
                                    ...context.fontConfig,
                                    ...padding.py2,
                                    color: item == value ? textColor : context.theme.TextColor
                                }}>{item}</Text>
                        </Pressable>;
                    }
                    if (typeof item.label === "function")
                        return <Pressable style={itemStyle} key={item.value} onPress={() => onChange(item.value)}>
                            {item.label(value as string | number)}
                        </Pressable>;
                    else
                        return <Pressable style={itemStyle} key={item.value} onPress={() => onChange(item.value)}>
                            {item.label}
                        </Pressable>;
                })
            }
        </View>
    );
};

export default SegmentedTab;

