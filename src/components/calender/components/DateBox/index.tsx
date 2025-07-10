import { Pressable, View, Text } from "react-native";
import React from "react";
import type { DateBoxProps } from "../../types";
import ThemeContext from "../../../context/context";
import { styles } from "./styles";
import { useCalendarContext } from "../../context/CalendarContext";

const DateBox = (props: DateBoxProps) => {
    const context = React.useContext(ThemeContext);
    const calendarContext = useCalendarContext();
    const date = new Date(props.year.toString() + "-" + (props.month + 1).toString().padStart(2, "0") + "-" + (props.day).toString().padStart(2, "0"));
    const active = date.getTime() == props.selectedDate?.getTime();
    const borderColor = active ? "#4285F4" : "transparent";

    return <Pressable
        style={styles.container}
        disabled={props.disabled}
        onPress={() => !active ? calendarContext.onSelect(date) : null}
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
                        borderWidth: 2
                    }
                ]} />
        }

        <View style={styles.dateContainer}>
            <Text
                style={[
                    styles.dateText,
                    { color: props.disabled ? context.theme.WhiteMuted : context.theme.TextColor },
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