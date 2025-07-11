import React, {useContext, useMemo} from "react";
import {type StyleProp, StyleSheet, View, type ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ThemeContext from "../context/context";
import type {GradientBlockProps} from "./types";
import {gradientBlockStyles} from "./styles";

const GradientBlock: React.FC<GradientBlockProps> = (props) => {
    const {theme} = useContext(ThemeContext);

    const blockStyle = useMemo<StyleProp<ViewStyle>>(
        () => [
            gradientBlockStyles.overflowHidden,
            props.borderRadius,
            props.style,
            props.bgfill
                ? {
                    padding:
                          StyleSheet.hairlineWidth * (props.borderWidth ?? 2),
                }
                : props.padding,
        ],
        [
            props.borderRadius,
            props.style,
            props.bgfill,
            props.borderWidth,
            props.padding,
        ],
    );

    const innerStyle = useMemo<StyleProp<ViewStyle>>(
        () => [
            props.borderRadius,
            props.padding,
            {backgroundColor: props.backgroundColor ?? theme.Theme},
        ],
        [props.borderRadius, props.padding, props.backgroundColor, theme.Theme],
    );

    return (
        <LinearGradient
            colors={props.colors}
            start={props.start}
            end={props.end}
            style={blockStyle}
        >
            {props.bgfill ? (
                <View style={innerStyle}>{props.children}</View>
            ) : (
                props.children
            )}
        </LinearGradient>
    );
};
export default GradientBlock;
