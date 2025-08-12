import React from "react";
import {Dimensions, Pressable, StyleSheet, View} from "react-native";
import Button from "../button/index";
import {borderRadius} from "vital-react-native";
import {themeState} from "../context/initialState";
import type {BadgeButtonType} from "./types";

const width = Dimensions.get("screen").width;
//Todo: themestate replace with context
//ToDo: Keep button
function BadgeButton(props: BadgeButtonType) {
    let action = themeState.Primary;
    switch(props.action) {
        case "error":
            action = themeState.Danger;
            break;
        case "warning":
            action = themeState.Warning;
            break;
        case "success":
            action = themeState.Success;
            break;
        case "info":
            action = themeState.Primary;
            break;
        case "muted":
            action = themeState.WhiteMuted;
            break;
        default:
            action = props.action || themeState.Primary;
            break;
    }
    // TODO: Shubhm says keep Button, I think we should keep Pressable.
    return (
        <Pressable onPress={props.onPress} style={[props.style, {alignItems: "center"}]}>
            {/*<View>*/}
            {props.children}
            {/*</View>*/}
            <View
                style={[
                    styles.circleStyle,
                    props.size ? {width: props.size} : {minWidth: width * 0.045,},
                    {
                        height: props.size ?? width * 0.045,
                        backgroundColor: action
                    },

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
        ...borderRadius.circle
    },
});
