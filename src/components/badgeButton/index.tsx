import React from "react";
import {Dimensions, Pressable, StyleSheet, View} from "react-native";
import Button from "../button/button";
import {borderRadius} from "vital-react-native";
import {themeState} from "../context/initialState";
import type {BadgeButtonType} from "./types";

const width = Dimensions.get("screen").width;

function BadgeButton(props: BadgeButtonType) {
    return (
        <Pressable onPress={props.onPress} style={[props.style, {alignItems: "center"}]}>
            <Button {...props} >
                {props.children}
            </Button>
            <View
                style={[
                    styles.circleStyle,
                    props.size ? {width: props.size} : {minWidth: width * 0.045,},
                    {height: props.size ?? width * 0.045},

                ]}
            >
                {props.badgeData}
            </View>
        </Pressable>
    );
}
export default BadgeButton;

const styles = StyleSheet.create({
    circleStyle: {
        position: "absolute",
        right: "-10%",
        top: "-10%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: themeState.Danger,
        ...borderRadius.circle
    },
});
