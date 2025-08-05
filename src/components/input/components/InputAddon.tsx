import React from "react";
import { View } from "react-native";
import ComponentStyles from "../styles";

interface InputAddonProps {
    children?: React.ReactNode;
    position: "left" | "right";
}

export default function InputAddon({ children, position }: InputAddonProps) {
    if (!children) return null;
    const style = position === "left" ? ComponentStyles.inputLeft : ComponentStyles.inputRight;
    return <View style={style}>{children}</View>;
} 