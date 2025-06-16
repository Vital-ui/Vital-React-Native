import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {padding} from "../../spacing/padding";
import {DateBoxProps} from "./types";
import ThemeContext from "../../context/context";

const DateBox = (props: DateBoxProps) => {
    const context = React.useContext(ThemeContext);
    const date = new Date(props.year.toString() + "-" + (props.month + 1).toString().padStart(2, "0") + "-" + (props.day).toString().padStart(2, "0"));
    const active = date.getTime() == props.selectedDate?.getTime();
    const borderColor = active ? "#4285F4" : "transparent";
    return <Pressable
        style={[{
            flex: 1,
            alignItems: "center",

        }]}
        disabled={props.disabled}
        onPress={() => !active ? props.onSelect(date) : null}
    >
        {
            props.activeDateBackground ?
                <View style={styles.activeDateBackground}>
                    {!props.disabled && active && props.activeDateBackground}
                </View> :
                <View style={[
                    styles.activeDateBackground,
                    {
                        borderRadius: 2,
                        borderColor: borderColor,
                        borderWidth: StyleSheet.hairlineWidth * 2
                    }
                ]}/>
        }

        <View style={[padding.py3, {width: "100%"}]}>
            <Text
                style={[
                    {
                        textAlign: "center",
                        color: props.disabled ? context.theme.WhiteMuted : context.theme.TextColor,
                        fontWeight: "bold"
                    },
                    props.dateStyle,
                    !props.disabled && active ? props.activeDateStyle : undefined
                ]}
            >
                {props.day}
            </Text>
        </View>
    </Pressable>;
};

export default DateBox;


const styles = StyleSheet.create({
    activeDateBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
});
