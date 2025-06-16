import React from "react";
import {GestureResponderEvent, StyleProp, TextStyle} from "react-native";

export type DateProps = {
    year: number;
    month: number;
    onSelect: (_: Date) => void | null;
    selectedDate?: Date;
    dateStyle?: StyleProp<TextStyle>;
    activeDateStyle?: StyleProp<TextStyle>;
    activeDateBackground?: React.ReactChild | React.ReactFragment;
    minimumDate?: Date;
}


export type DateBoxProps = DateProps & {
    day: number;
    disabled?: boolean;
}

export type HeaderProps = {
    headerStyle?: StyleProp<TextStyle>;
    renderHeader?: (_month: string | undefined, _year: number) => React.ReactChild | React.ReactFragment;
    month: number;
    year: number;
    prevMonth: ((_: GestureResponderEvent) => void) | undefined;
    nextMonth: ((_: GestureResponderEvent) => void) | undefined;
}

