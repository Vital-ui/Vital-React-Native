import React from "react";
import {StyleProp, ViewStyle} from "react-native";

export type ToastProps = {
    top?: number;
    children: React.ReactChild | React.ReactFragment;
    open: boolean;
    toastStyle?: StyleProp<ViewStyle>;
}
