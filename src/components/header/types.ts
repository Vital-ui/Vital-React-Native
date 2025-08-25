import React from "react";
import type {
    ViewStyle
} from "react-native";

export type HeaderProps = {
    style?: ViewStyle;
    headerLeft?: React.ReactNode;
    headerRight?: React.ReactNode;
    headerContent?: React.ReactNode;
    top?: number;
    fluid?: boolean;
}
