import React from "react";
import {View, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type {GradientImageProps} from "./types";

export default function GradientImage(props: GradientImageProps) {
    return (
        <View>
            <Image
                source={props.image}
                style={props.style}
            />
            <LinearGradient
                colors={props.colors}
                start={props.start} end={props.end}
                style={[{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}, props.style]}
            >
                {props.children}
            </LinearGradient>
        </View>
    );
}

