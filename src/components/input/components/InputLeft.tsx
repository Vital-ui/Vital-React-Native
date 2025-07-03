import React from "react";
import { View } from "react-native";
import ComponentStyles from "../styles";

interface InputLeftProps {
    children?: React.ReactNode;
}

export default function InputLeft({ children }: InputLeftProps) {
    if (!children) return null;
    return <View style={ComponentStyles.inputLeft}>{children}</View>;
} 