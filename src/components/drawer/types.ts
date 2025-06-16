import React from "react";
import {ColorValue} from "react-native";

export type DrawerProps = {
    position?: "top" | "bottom" | "right" | "left",
    children?: React.ReactChild | React.ReactFragment,
    open?: boolean,
    backgroundColor?: ColorValue,
    width?: string,
    onBackdropPress?: () => void | null
}
