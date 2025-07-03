import React, {useContext, useMemo} from "react";
import {
    Pressable
} from "react-native";
import {margin} from "../spacing/margin";
import ThemeContext from "../context/context";
import type {RadioButtonProps} from "./types";
import LinearGradient from "react-native-linear-gradient";

export default function RadioButton(props: RadioButtonProps) {
    const {theme} = useContext(ThemeContext);
    const colors =useMemo(() => {
        if(props.dotColor) {
            return typeof props.dotColor === "string"
                ? [props.dotColor, props.dotColor]
                : props.dotColor;
        }
        return [theme.TextColor, theme.TextColor];
    }, [props.dotColor, theme.TextColor]);

    const outerCircleStyle = [
        props.boxStyle,
        props.children && margin.me2,
        props.fill ?? {backgroundColor: props.backgroundColor},
        {
            borderWidth: props.borderSize ?? Math.round(props.size / 20),
            borderColor: props.borderColor ?? theme.TextColor,
            borderRadius: props.size / 2,
            height: props.size,
            width: props.size,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        },
    ];

    return (
        <Pressable
            onPress={props.onPress}
            style={[props.style, {flexDirection: "row", alignItems: "center"}]}>
            <Pressable
                style={outerCircleStyle}
                onPress={props.onPress}
            >
                {props.selected &&
                    <LinearGradient
                        colors={colors}
                        style={{
                            borderRadius: props.size / 4,
                            height: props.size / 2,
                            width: props.size / 2
                        }}
                        start={props.start ??  {x: 0, y: 0.5}}
                        end={props.end ?? {x: 1, y: 0.5}}
                    />
                }
            </Pressable>
            {props.children}
        </Pressable>
    );
}
