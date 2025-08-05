import type { StyleProp, TextStyle, ViewStyle, GestureResponderEvent } from "react-native";
import React from "react";

// Consolidated styles interface
export type CalendarStyles = {
    dayStyle?: StyleProp<TextStyle>;
    headerStyle?: StyleProp<TextStyle>;
    lineSeparatorStyle?: StyleProp<ViewStyle>;
    dateStyle?: StyleProp<TextStyle>;
    activeDateStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

// Base props shared across date-related components
export type BaseDateProps = {
    onSelect: (_: Date) => void | null;
    selectedDate?: Date;
    minimumDate?: Date;
    activeDateBackground?: React.ReactNode;
}

// Main calendar props
export type CalenderProps = {
    renderHeader?: (_month: string | undefined, _year: number) => React.ReactNode;
    activeDateBackground?: React.ReactNode;
    onSelect: (_: Date) => void | null;
    date?: Date;
    minimumDate?: Date;
    styles?: CalendarStyles;
}

// Date component props (extends base props but onSelect comes from context)
export type DateProps = Omit<BaseDateProps, 'onSelect'> & {
    year: number;
    month: number;
    dateStyle?: StyleProp<TextStyle>;
    activeDateStyle?: StyleProp<TextStyle>;
}

// DateBox props (extends DateProps)
export type DateBoxProps = DateProps & {
    day: number;
    disabled?: boolean;
}

// Header props (headerStyle now comes from context)
export type HeaderProps = {
    renderHeader?: (_month: string | undefined, _year: number) => React.ReactNode;
    month: number;
    year: number;
    prevMonth: ((_: GestureResponderEvent) => void) | undefined;
    nextMonth: ((_: GestureResponderEvent) => void) | undefined;
}
