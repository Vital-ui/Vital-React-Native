import React, {useContext} from "react";
import {Pressable, type ViewStyle} from "react-native";
import SVGCheck from "./assests/check.svg";
import {margin} from "../spacing/margin";
import ThemeContext from "../context/context";
import type {CheckboxProps} from "./types";
import styles from "./styles";

export default function Checkbox(props: CheckboxProps) {
    const {theme} = useContext(ThemeContext);
    const dynamicBoxStyles: ViewStyle = {
        height: props.size,
        width: props.size,
        borderWidth: props.borderSize ?? Math.round(props.size / 20),
        borderColor: props.borderColor ?? theme.TextColor,
        backgroundColor: props.fill && props.backgroundColor ? props.backgroundColor : undefined,
    };
    return (
        <Pressable
            onPress={props.onPress}
            style={[props.style, styles.container]}
        >
            <Pressable
                style={[
                    props.boxStyle,
                    props.children ? margin.me2 : undefined,
                    props.fill && {
                        backgroundColor: props.backgroundColor,
                    },
                    dynamicBoxStyles,
                    styles.boxBase
                ]}
                onPress={props.onPress}
            >
                {props.checked &&
                            <SVGCheck
                                fill={props.checkColor ?? theme.TextColor}
                                height={"100%"}
                                width={"100%"}
                            />
                }
            </Pressable>
            {props.children}
        </Pressable>
    );
}
