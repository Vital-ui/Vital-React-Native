import React, { useEffect, useRef, useState } from "react";
import {
    TextInput,
    View,
} from "react-native";
import type { OTPInputProps } from "./types";
import ThemeContext from "../context/context";
import ComponentStyles from "./styles";

export default function OTPInput(props: OTPInputProps) {
    const context = React.useContext(ThemeContext);
    const [otpVal, setOtpVal] = useState<string[]>(Array(props.length).fill(""));
    const refs = useRef<Array<TextInput | null>>(Array(props.length).fill(null));

    const OTP = props.value !== undefined ? props.value.split("") : otpVal;

    useEffect(() => { 
        setOtpVal(Array(props.length).fill(""));
    }, [props.length]);

    const focusNext = (value: string, index: number) => {
        const otp = [...OTP];
        otp[index] = value;
        setOtpVal(otp);
        if (props.onChange) props.onChange(otp.join(""));
        if (value && index < props.length - 1) {
            refs.current[index + 1]?.focus();
        }
        if (value && index === props.length - 1) {
            refs.current[index]?.blur();
        }
    };

    const focusPrevious = (key: string, index: number) => {
        if (key === "Backspace" && index > 0 && !OTP[index]) {
            const otp = [...OTP];
            otp[index - 1] = "";
            setOtpVal(otp);
            refs.current[index - 1]?.focus();
            if (props.onChange) props.onChange(otp.join(""));
        }
    };

    return (
        <View style={[ComponentStyles.container, props.style]}>
            {Array.from({ length: props.length }).map((_, i) => (
                <TextInput
                    key={i}
                    ref={ref => { refs.current[i] = ref; }}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={value => focusNext(value, i)}
                    onKeyPress={e => focusPrevious(e.nativeEvent.key, i)}
                    style={[
                        {
                            ...context.fontConfig,
                            borderColor: context.theme.ThemeMuted,
                            color: context.theme.TextColor,
                            backgroundColor: context.theme.Theme
                        },
                        ComponentStyles.input,
                        props.blockStyle,
                    ]}
                    editable={props.editable}
                    value={OTP[i] || ""}
                />
            ))}
        </View>
    );
}


