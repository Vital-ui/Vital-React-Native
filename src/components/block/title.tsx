// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {useContext} from "react";
import type {TitleType} from "./types";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import {margin} from "../spacing/margin";
import {fontSize} from "vital-react-native";
import styles from "./styles";
import ThemeContext from "../context/context";
import { pickMarginStyles } from './index';



function Title(props: TitleType) {
    const {fontConfig} = useContext(ThemeContext);
    const titleStyle = StyleSheet.flatten(props.titleStyle) as TextStyle & ViewStyle;
    return(
        <View style={[styles.titleStyle]}>
            {props.titleLeft}
            <Text
                style={[
                    fontConfig,
                    titleStyle.fontSize ?? fontSize.H6,
                    props.titleLeft ? margin.ms2 : undefined,
                    pickMarginStyles(titleStyle).marginEntries,
                    pickMarginStyles(titleStyle).nonMarginEntries
                ]}
            >
                {props.title ?? "Title Goes Here"}
            </Text>
        </View>
    );
}
export default Title;
