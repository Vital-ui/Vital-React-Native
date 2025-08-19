import React, { useContext } from "react";
import {Dimensions, Pressable, StyleSheet, View} from "react-native";
import Button from "../button";
import {borderRadius} from "../border/borderRadius";
import type {BadgeButtonType} from "./types";
import ThemeContext from "../context/context";

const width = Dimensions.get("screen").width;
//Todo: can be completed once button component complete because styles need to be refactored
// TODO: we will go with button only.
function BadgeButton(props: BadgeButtonType) {
    const {theme} = useContext(ThemeContext);
    let action = theme.Primary;
    switch(props.action) {
        case "error":
            action = theme.Danger;
            break;
        case "warning":
            action = theme.Warning;
            break;
        case "success":
            action = theme.Success;
            break;
        case "info":
            action = theme.Primary;
            break;
        case "muted":
            action = theme.WhiteMuted;
            break;
        default:
            action = props.action || theme.Primary;
            break;
    }
    return (
        <Pressable onPress={props.onPress} style={[props.style, {alignItems: "center"}]}>
            <Button {...props} >
                {props.children}
            </Button>
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
