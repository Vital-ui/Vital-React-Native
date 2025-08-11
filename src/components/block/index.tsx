// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import {StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {margin} from "../spacing/margin";
import type {BlockType} from "./types";
import Title from "./title";
import styles from "./styles";

export const pickMarginStyles = (style: any) => {
    const hasAnyMargin = Object.keys(style).some((key) => key.startsWith("margin"));
    const styleWithMargin = hasAnyMargin ? style : {...style, ...margin.mb2};
    const marginEntries = Object.fromEntries(Object.entries(styleWithMargin).filter(([key]) => key.startsWith("margin")));
    const nonMarginEntries = Object.fromEntries(Object.entries(styleWithMargin).filter(([key]) => !key.startsWith("margin")));
    return {
        marginEntries,
        nonMarginEntries,
    };
};

function Block(props: BlockType) {
    const style = StyleSheet.flatten(props.style) as ViewStyle;
    const contentContainerStyle = StyleSheet.flatten(props.contentContainerStyle) as ViewStyle & TextStyle;
    const titleStyle = StyleSheet.flatten(props.titleStyle) as TextStyle & ViewStyle;

    return (
        <View style={style}>
            <View
                style={
                    props.titleFluid ? styles.containerFluid : styles.container
                }
            >
                {props.title && (
                    <View style={[styles.headerStyle, pickMarginStyles(titleStyle).marginEntries]}>
                        <Title {...props} />
                        {props.titleRight ?? null}
                    </View>
                )}
            </View>
            <View
                style={[
                    props.fluid ? styles.containerFluid : styles.container,
                    contentContainerStyle,
                ]}
            >
                {props.children}
            </View>
        </View>
    );
}

export default Block;


