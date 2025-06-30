import React, { useContext } from "react";
import ThemeContext from "../context/context";
import { Text as NativeText } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import type { GradientTextProps } from "./types";

const GradientText = (props: GradientTextProps) => {
    const theme = useContext(ThemeContext);
    const textProps = JSON.parse(JSON.stringify(props));
    delete textProps["colors"];
    delete textProps["start"];
    delete textProps["end"];
    return (
        <MaskedView maskElement={<NativeText {...textProps} style={[{ ...theme.fontConfig }, props.style]} />}>
            <LinearGradient
                colors={props.colors}
                start={props.start ? props.start : { x: 0, y: 0 }}
                end={props.end ? props.end : { x: 1, y: 1 }}
            >
                <NativeText {...textProps} style={[{ ...theme.fontConfig }, props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientText;

