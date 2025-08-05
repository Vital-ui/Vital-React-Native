import React from "react";
import {Pressable, Text, View} from "react-native";
import ThemeContext from "../context/context";
import type {SegmentedTabProps, TabOption} from "./types";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
    Easing,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import {padding} from "../spacing/padding";
import {segmentedTabStyles} from "./style";

const SegmentedTab = (props: SegmentedTabProps) => {
    const {theme, fontConfig} = React.useContext(ThemeContext);
    const options = props.options;
    const textColor = props.activeTextColor ?? theme.TextColor;
    const borderRadiusStyle = props.borderRadius
        ? {borderRadius: props.borderRadius}
        : undefined;
    const colors = React.useMemo(
        () =>
            props.colors
                ? Array.isArray(props.colors)
                    ? props.colors
                    : [props.colors, props.colors]
                : [theme.Primary, theme.Primary],
        [props.colors, theme.Primary],
    );

    const initialValue = React.useMemo(() => {
        if (props.defaultValue !== undefined) return props.defaultValue;
        if (!options.length) return undefined;
        const first = options[0];
        if (first == null) return undefined;
        return typeof first === "string" || typeof first === "number"
            ? first
            : first.value;
    }, [props.defaultValue, options]);

    const [selected, setSelected] = React.useState(initialValue);
    const value = props.value != undefined ? props.value : selected;

    const onChange = React.useCallback(
        (val: string | number) => {
            if (val === value) return;
            setSelected(val);
            props.onChange?.(val);
        },
        [value, props],
    );
    const index = options.findIndex((item: TabOption) =>
        typeof item == "string" || typeof item == "number"
            ? item == value
            : item.value === value,
    );
    const len = options.length;
    const activeTabStyle = useAnimatedStyle(() => ({
        left: withTiming((index * 100) / len + "%", {
            duration: 500,
            easing: Easing.out(Easing.exp),
        }),
    }));
    return (
        <View
            style={[
                segmentedTabStyles.container,
                borderRadiusStyle,
                props.containerStyle,
                {backgroundColor: theme.TextColor + "0D"},
            ]}
        >
            <Animated.View
                style={[
                    segmentedTabStyles.animatedTab,
                    {
                        width: 100 / options.length + "%",
                    },
                    activeTabStyle,
                    borderRadiusStyle,
                ]}
            >
                <LinearGradient
                    colors={colors}
                    start={props.start ?? {x: 0, y: 0.5}}
                    end={props.end ?? {x: 1, y: 0.5}}
                    style={[segmentedTabStyles.gradient, borderRadiusStyle]}
                />
            </Animated.View>
            {options.map((item) => {
                let tabValue: string | number;
                let labelNode: React.ReactNode;
                if (typeof item === "string" || typeof item === "number") {
                    tabValue = item;
                    labelNode = item;
                } else {
                    tabValue = item.value;
                    labelNode =
                        typeof item.label === "function"
                            ? item.label(value as string | number)
                            : item.label;
                }
                return (
                    <Pressable
                        style={segmentedTabStyles.tabItem}
                        key={tabValue}
                        onPress={() => onChange(tabValue)}
                    >
                        <Text
                            style={[
                                fontConfig,
                                padding.py2,
                                {
                                    color:
                                        tabValue === value
                                            ? textColor
                                            : theme.TextColor,
                                },
                            ]}
                        >
                            {labelNode}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

export default SegmentedTab;
