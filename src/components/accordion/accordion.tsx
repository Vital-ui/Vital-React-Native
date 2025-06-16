import React from "react";
import {Platform, UIManager, LayoutAnimation, View, Pressable, StyleSheet} from "react-native";
import SVGUp from "./chevron-up.svg";
import SVGDown from "./chevron-down.svg";
import ThemeContext from "../context/context";
import type {AccordianProps} from "./types";

export default function Accordion(props: AccordianProps) {
    const [expanded, setExpanded] = React.useState(false);
    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const toggleExpand = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut,
        );
        if (props.setOpen) {
            props.setOpen();
        }
        setExpanded(!expanded);
    };
    const open = props.open !== undefined ? props.open : expanded;
    return (
        <ThemeContext.Consumer>
            {
                (context) => <View style={props.style}>
                    <Pressable style={[styles.title, props.titleStyle]} onPress={toggleExpand}>
                        <View style={styles.titleText}>
                            {props.title}
                        </View>
                        {props.showIcon && <View style={styles.titleBtn}>
                            {open
                                ? <SVGUp fill={context.theme.TextColor} height={14} width={14}/>
                                : <SVGDown fill={context.theme.TextColor} height={14} width={14}/>
                            }
                        </View>}
                    </Pressable>
                    {open && <View style={[props.bodyStyle, {overflow: "hidden"}]}>
                        {props.children}
                    </View>
                    }
                </View>
            }
        </ThemeContext.Consumer>
    );
}

const styles = StyleSheet.create({
    title: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
        flex: 11,
    },
    titleBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
