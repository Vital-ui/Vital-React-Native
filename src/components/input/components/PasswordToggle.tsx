import React from "react";
import { Pressable } from "react-native";
import SVGEyeOpen from "../assets/eye-fill.svg";
import SVGEyeClose from "../assets/eye-slash-fill.svg";
import ComponentStyles from "../styles";

interface PasswordToggleProps {
    secure: boolean;
    onPress: () => void;
}

export default function PasswordToggle({ secure, onPress }: PasswordToggleProps) {
    return (
        <Pressable style={ComponentStyles.inputRight} onPress={onPress}>
            {secure ? (
                <SVGEyeClose fill="#888888" height={20} width={20} />
            ) : (
                <SVGEyeOpen fill="#888888" height={20} width={20} />
            )}
        </Pressable>
    );
} 