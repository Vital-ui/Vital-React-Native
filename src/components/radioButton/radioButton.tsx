import React from "react";
import {
    Pressable,
} from "react-native";
import {margin} from "../spacing/margin";
import ThemeContext from "../context/context";
import type {RadioButtonProps} from "./types";
import LinearGradient from "react-native-linear-gradient";

export default function RadioButton(props: RadioButtonProps) {
    const context = React.useContext(ThemeContext);
    const colors = props.dotColor ? typeof props.dotColor === "string" ? [props.dotColor, props.dotColor] : props.dotColor : [context.theme.TextColor, context.theme.TextColor];

    return (
        <Pressable
            onPress={props.onPress}
            style={[props.style, {flexDirection: "row", alignItems: "center"}]}>
            <Pressable
                style={[
                    props.boxStyle,
                    props.children ? margin.me2 : undefined,
                    props.fill ? {
                        backgroundColor: props.backgroundColor,
                    } : undefined,
                    {
                        borderWidth: props.borderSize ? props.borderSize : Math.round(props.size / 20),
                        borderColor: props.borderColor ? props.borderColor : context.theme.TextColor,
                        borderRadius: props.size / 2,
                        height: props.size,
                        width: props.size,
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    },
                ]}
                onPress={props.onPress}
            >
                {props.selected &&
                    <LinearGradient
                        colors={colors}
                        style={{borderRadius: props.size / 4, height: props.size / 2, width: props.size / 2}}
                        start={props.start ? props.start : {x: 0, y: 0.5}}
                        end={props.end ? props.end : {x: 1, y: 0.5}}
                    />
                }
            </Pressable>
            {props.children}
        </Pressable>
    );
}
