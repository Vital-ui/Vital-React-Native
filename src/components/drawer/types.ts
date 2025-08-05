import React from "react";
import type {ColorValue} from "react-native";

type DrawerPosition = "top" | "bottom" | "right" | "left";
export type DrawerProps = {
    position?: DrawerPosition;
    children?: React.ReactNode;
    open?: boolean;
    backgroundColor?: ColorValue;
    width?: string;
    onBackdropPress?: () => void | null;
};
