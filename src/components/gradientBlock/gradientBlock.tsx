import React from "react";
import {View, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ThemeContext from "../context/context";
import type {GradientBlockProps} from "./types";

export default function GradientBlock(props: GradientBlockProps) {
    return (
        <ThemeContext.Consumer>
            {
                (context) => <LinearGradient
                    colors={props.colors}
                    start={props.start} end={props.end}
                    style={props.bgfill
                        ? [{overflow: "hidden"}, props.borderRadius, props.style, {padding: StyleSheet.hairlineWidth * (props.borderWidth ? props.borderWidth : 2)}]
                        : [{overflow: "hidden"}, props.borderRadius, props.style, props.padding]
                    }
                >
                    {props.bgfill
                        ? <View
                            style={[props.borderRadius, props.padding, {backgroundColor: props.backgroundColor ? props.backgroundColor : context.theme.Theme}]}>
                            {props.children}
                        </View>
                        : props.children
                    }
                </LinearGradient>
            }
        </ThemeContext.Consumer>
    );
}
