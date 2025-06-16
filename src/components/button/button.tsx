import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {TouchableOpacity, View, ActivityIndicator, Dimensions, StyleSheet} from "react-native";
import ThemeContext from "../context/context";
import type {ButtonType} from "./types";

export default function Button(props: ButtonType) {
    let color: string[] | undefined = undefined;
    if (props.gradient) {
        if (Array.isArray(props.color)) {
            color = props.color;
        }
    }
    if (color == undefined && props.color && typeof props.color == "string") {
        color = [props.color, props.color];
    }
    return (
        <ThemeContext.Consumer>
            {
                (context) => <LinearGradient
                    colors={color ? color : [context.theme.ThemeMuted, context.theme.ThemeMuted]}
                    start={props.start ? props.start : {x: 0.0, y: 1.0}} end={props.end ? props.end : {x: 1.0, y: 1.0}}
                    style={[{overflow: "hidden"}, props.borderRadius, props.margin, props.bordered && {padding: StyleSheet.hairlineWidth * 4}]}
                >
                    <TouchableOpacity
                        activeOpacity={0.65}
                        onPress={props.onPress}
                        disabled={props.loading || props.disabled}
                        style={[props.padding, props.bordered ? {backgroundColor: props.backgroundColor ? props.backgroundColor : context.theme.Theme} : undefined, props.borderRadius]}
                        {...props.touchableOpacityProps}
                    >
                        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                            {props.loading &&
                                <ActivityIndicator style={{marginEnd: Dimensions.get("screen").height * 0.01}}
                                                   color={"white"}/>}
                            {props.left}
                            <View
                                style={[props.left ? {marginStart: Dimensions.get("screen").height * 0.01} : undefined, props.right ? {marginEnd: Dimensions.get("screen").height * 0.01} : undefined, {flexDirection: "row"}]}>
                                {props.children}
                            </View>
                            {props.right}
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            }
        </ThemeContext.Consumer>
    );
}
