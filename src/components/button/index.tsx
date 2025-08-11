import React, {useContext} from "react";
import LinearGradient from "react-native-linear-gradient";
import {View, ActivityIndicator, Dimensions, StyleSheet, ViewStyle, Pressable } from 'react-native';
import ThemeContext from "../context/context";
import type {ButtonType} from "./types";

const {height: SCREEN_HEIGHT} = Dimensions.get("screen");

export default function Button(props: ButtonType) {
    const {theme} = useContext(ThemeContext);
    const style = StyleSheet.flatten(props.style) as ViewStyle;
    const colors = React.useMemo(() => {
        if (props.color) {
            if (Array.isArray(props.color)) {
                return props.color;
            }
        }
        if(typeof props.color === "string") {
            return [props.color, props.color];
        }
        return [theme.ThemeMuted, theme.ThemeMuted];
    }, [props.color, theme]);

    const gradientStart = props.start ?? {x: 0.0, y: 1.0};
    const gradientEnd = props.end ?? {x: 1.0, y: 1.0};

    const linearGradientStyle = [
        {
            overflow: "hidden",
            borderRadius: style.borderRadius,
            margin: style.margin,
            marginTop: style.marginTop,
            marginBottom: style.marginBottom,
            marginLeft: style.marginLeft,
            marginRight: style.marginRight,
            marginVertical: style.marginVertical,
            marginHorizontal: style.marginHorizontal,

        },
        props.bordered && {padding: StyleSheet.hairlineWidth * 4},
    ];

    const touchableStyle = [
        {
            padding: style.padding,
            paddingHorizontal: style.paddingHorizontal,
            paddingVertical: style.paddingVertical,
            paddingTop: style.paddingTop,
            paddingBottom: style.paddingBottom,
            paddingLeft: style.paddingLeft,
            paddingRight: style.paddingRight,
            borderRadius: style.borderRadius,
        },
        props.bordered && {
            backgroundColor: style.backgroundColor ?? theme.Theme,
        },
    ];

    return (
        <LinearGradient
            colors={colors}
            start={gradientStart}
            end={gradientEnd}
            style={linearGradientStyle}
        >
            <Pressable
                onPress={props.onPress}
                disabled={props.loading || props.disabled}
                style={({pressed}) => [
                    touchableStyle,
                    {opacity: pressed ? 0.65 : 1,},
                ]}
                {...props.pressableProps}
            >
                <View style={styles.buttonWrapper}>
                    {props.loading &&
                                <ActivityIndicator style={styles.loadingIndicator}
                                    color={"white"}/>}
                    {props.left}
                    <View
                        style={[props.left ? styles.leftSpacing: undefined, props.right ? styles.rightSpacing : undefined, {flexDirection: "row"}]}>
                        {props.children}
                    </View>
                    {props.right}
                </View>
            </Pressable>
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
