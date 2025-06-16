import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {Pressable, StyleSheet, View} from "react-native";
import type {SwitchProps} from "./types";
import Animated, {
    Easing,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";
import ThemeContext from "../context/context";

const Switch = (props: SwitchProps) => {
    const context = React.useContext(ThemeContext);
    const [active, setActive] = React.useState(!!props.defaultValue);
    const colors = Array.isArray(props.activeTrackColors) ? props.activeTrackColors : [props.activeTrackColors, props.activeTrackColors];
    const onChange = () => {
        const temp = !active;
        setActive(temp);
        if (props.onChange)
            props.onChange(temp);
    };

    React.useEffect(() => {
        if (props.value != undefined && props.value != active)
            setActive(props.value);
    }, [props.value]);


    const thumbStyle = useAnimatedStyle(() => {
        return {
            left: withTiming(active ? 23 : 3, {
                duration: 500,
                easing: Easing.out(Easing.exp),
            }),
            position: "absolute",
            top: 3
        };

    });
    return (
        <Pressable onPress={onChange} disabled={props.disabled}>
            <LinearGradient
                colors={active ? colors : ["#00000000", "#00000000"]}
                start={props.start ? props.start : {x: 0, y: 1}}
                end={props.end ? props.end : {x: 1, y: 1}}
                style={[styles.track, {overflow: "hidden"}]}
            >
                <View
                    style={[styles.thumbContainer, {backgroundColor: active ? "#00000000" : context.theme.TextColor + "1A"}]}>
                    <Animated.View style={[styles.thumb, props.thumbStyle, thumbStyle]}/>
                </View>
            </LinearGradient>
        </Pressable>

    );
};

export default Switch;

const styles = StyleSheet.create({
    thumb: {
        backgroundColor: "#fff",
        height: 21,
        width: 21,
        borderRadius: 21,
        shadowColor: "#B0BAC5",
        elevation: 5,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    track: {
        width: 47,
        height: 27,
        borderRadius: 50,
    },
    thumbContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2B3555",
        padding: 3,
        borderRadius: 20
    }
});
