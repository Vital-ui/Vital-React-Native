import type { StyleProp, TextStyle, ViewStyle, GestureResponderEvent } from "react-native";
import React from "react";

export type CalenderProps = {
    renderHeader?: (_month: string | undefined, _year: number) => React.ReactNode;
    activeDateBackground?: React.ReactNode
    onSelect: (_: Date) => void | null;
    date?: Date;
    minimumDate?: Date;
    styles?: {
        dayStyle?: StyleProp<TextStyle>;
        headerStyle?: StyleProp<TextStyle>;
        lineSeparatorStyle?: StyleProp<ViewStyle>;
        dateStyle?: StyleProp<TextStyle>;
        activeDateStyle?: StyleProp<TextStyle>;
        containerStyle?: StyleProp<ViewStyle>;
    }
}

export type DateProps = {
    year: number;
    month: number;
    onSelect: (_: Date) => void | null;
    selectedDate?: Date;
    dateStyle?: StyleProp<TextStyle>;
    activeDateStyle?: StyleProp<TextStyle>;
    activeDateBackground?: React.ReactNode;
    minimumDate?: Date;
}

export type DateBoxProps = DateProps & {
    day: number;
    disabled?: boolean;
}

export type HeaderProps = {
    headerStyle?: StyleProp<TextStyle>;
    renderHeader?: (_month: string | undefined, _year: number) => React.ReactNode;
    month: number;
    year: number;
    prevMonth: ((_: GestureResponderEvent) => void) | undefined;
    nextMonth: ((_: GestureResponderEvent) => void) | undefined;
}
