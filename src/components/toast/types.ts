import React from "react";
import {StyleProp, ViewStyle} from "react-native";

export type ToastProps = {
    top?: number;
    children: React.ReactNode;
    open: boolean;
    style?: StyleProp<ViewStyle>;
}
