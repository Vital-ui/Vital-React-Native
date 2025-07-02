import React from "react";
import {Dimensions, Pressable, View} from "react-native";
import Button from "../button";
import {borderRadius} from "../border/borderRadius";
import {themeState} from "../context/initialState";
import type {BadgeButtonType} from "./types";

const width = Dimensions.get("screen").width;

export default function BadgeButton(props: BadgeButtonType) {
    return (
        <Pressable onPress={props.onPress} style={[props.style, {alignItems: "center"}]}>
            <Button {...props} >
                {props.children}
            </Button>
            <View
                style={[
                    {
                        height: props.size ? props.size : width * 0.045,
                        position: "absolute",
                        right: "-10%",
                        top: "-10%",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        backgroundColor: themeState.Danger,
                        ...borderRadius.circle
                    },
                    props.size ? {width: props.size} : {minWidth: width * 0.045,}
                ]}
            >
                {props.badgeData}
            </View>
        </Pressable>
    );
}
