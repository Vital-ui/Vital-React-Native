import React from "react";
import {Pressable} from "react-native";
import SVGCheck from "./check.svg";
import {margin} from "../spacing/margin";
import ThemeContext from "../context/context";
import type {CheckboxProps} from "./types";

export default function Checkbox(props: CheckboxProps) {
    return (
        <ThemeContext.Consumer>
            {
                (context) => <Pressable
                    onPress={props.onPress}
                    style={[props.style, {flexDirection: "row", alignItems: "center"}]}
                >
                    <Pressable
                        style={[
                            props.boxStyle,
                            props.children ? margin.me2 : undefined,
                            props.fill && {
                                backgroundColor: props.backgroundColor,
                            },
                            {
                                borderWidth: props.borderSize ? props.borderSize : Math.round(props.size / 20),
                                borderColor: props.borderColor ? props.borderColor : context.theme.TextColor,
                                height: props.size,
                                width: props.size,
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            },
                        ]}
                        onPress={props.onPress}
                    >
                        {props.checked &&
                            <SVGCheck
                                fill={props.checkColor ? props.checkColor : context.theme.TextColor}
                                height={"100%"}
                                width={"100%"}
                            />
                        }
                    </Pressable>
                    {props.children}
                </Pressable>
            }
        </ThemeContext.Consumer>
    );
}
