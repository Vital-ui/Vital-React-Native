import React, {useContext} from "react";
import LinearGradient from "react-native-linear-gradient";
import {TouchableOpacity, View, ActivityIndicator, Dimensions, StyleSheet} from "react-native";
import ThemeContext from "../context/context";
import type {ButtonType} from "./types";

const {height: SCREEN_HEIGHT} = Dimensions.get("screen");

export default function Button(props: ButtonType) {
    const {theme} = useContext(ThemeContext);
    const colors = React.useMemo(() => {
        if (props.gradient) {
            if (Array.isArray(props.color)) {
                return props.color;
            }
        }
        if(typeof props.color === "string") {
            return [props.color, props.color];
        }
        return [theme.ThemeMuted, theme.ThemeMuted];
    }, [props.gradient, props.color, theme]);

    const gradientStart = props.start ?? {x: 0.0, y: 1.0};
    const gradientEnd = props.end ?? {x: 1.0, y: 1.0};

    const linearGradientStyle = [
        {overflow: "hidden"},
        props.borderRadius,
        props.margin,
        props.bordered && {padding: StyleSheet.hairlineWidth * 4},
    ];

    const touchableStyle = [
        props.padding,
        props.bordered && {
            backgroundColor: props.backgroundColor ?? theme.Theme,
        },
        props.borderRadius,
    ];


    return (
        <LinearGradient
            colors={colors}
            start={gradientStart}
            end={gradientEnd}
            style={linearGradientStyle}
        >
            <TouchableOpacity
                activeOpacity={0.65}
                onPress={props.onPress}
                disabled={props.loading || props.disabled}
                style={touchableStyle}
                {...props.touchableOpacityProps}
            >
                <View style={styles.buttonWrapper}>
                    {props.loading &&
                                <ActivityIndicator style={styles.loadingIndicator}
                                    color={"white"}/>}
                    {props.left}
                    <View
                        style={[props.left && styles.leftSpacing, props.right && styles.rightSpacing, {flexDirection: "row"}]}>
                        {props.children}
                    </View>
                    {props.right}
                </View>
            </TouchableOpacity>
        </LinearGradient>

    );
}
const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    loadingIndicator: {
        marginEnd: SCREEN_HEIGHT * 0.01,
    },
    leftSpacing: {
        marginStart: SCREEN_HEIGHT * 0.01,
    },
    rightSpacing: {
        marginEnd: SCREEN_HEIGHT * 0.01,
    },

});
