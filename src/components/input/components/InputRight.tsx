import React from "react";
import { View } from "react-native";
import ComponentStyles from "../styles";

interface InputRightProps {
    children?: React.ReactNode;
}

export default function InputRight({ children }: InputRightProps) {
    if (!children) return null;
    return <View style={ComponentStyles.inputRight}>{children}</View>;
} 