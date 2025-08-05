// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {useContext} from "react";
import type {TitleType} from "./types";
import {Text, View} from "react-native";
import {margin} from "../spacing/margin";
import {fontSize} from "vital-react-native";
import styles from "./styles";
import ThemeContext from "../context/context";

const {fontConfig} = useContext(ThemeContext);

function Title(props: TitleType) {
    return(
        <View style={styles.titleStyle}>
            {props.titleLeft}
            <Text
                style={[
                    fontConfig,
                    props.blockTitleSize ?? fontSize.H6,
                    props.titleLeft ? margin.ms2 : undefined,
                    props.blockTitleStyle]}
            >
                {props.title ?? "Title Goes Here"}
            </Text>
        </View>
    );
}
export default Title;
