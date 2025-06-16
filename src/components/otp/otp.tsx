import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    TextInput,
    View,
} from "react-native";
import type {OTPProps} from "./types";
import ThemeContext from "../context/context";

let otpTextInput: any[] = [];

export default function OTPInput(props: OTPProps) {
    const context = React.useContext(ThemeContext);
    const [otpVal, setOtpVal] = useState<string[]>([]);
    const OTP = props.value != undefined ? props.value.split("") : otpVal;
    const [render, setRender] = useState<any[]>([]);
    useEffect(() => {
        const temp: any[] = [];
        otpTextInput = [];
        for (let i = 0; i < props.length; i++) {
            temp.push(<TextInput
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(value) => focusNext(value, i)}
                onKeyPress={(e) => focusPrevious(e.nativeEvent.key, i)}
                style={[{
                    ...context.fontConfig,
                    borderColor: context.theme.ThemeMuted,
                    color: context.theme.TextColor
                }, styles.input, props.blockStyle, {backgroundColor: props.backgroundColor ? props.backgroundColor : context.theme.Theme}]}
                key={i}
                editable={props.editable}
                value={OTP[i]}
                ref={(ref) => otpTextInput.push(ref)}/>);
        }
        setRender(temp);
    }, [props.length, props.editable]);

    const focusNext = (value: string, index: number) => {
        if (index < props.length - 1 && value) {
            otpTextInput[index + 1].focus();
        }
        if (index === props.length - 1 && value) {
            otpTextInput[index].blur();
        }
        const otp: string[] = OTP;
        otp[index] = value;
        setOtpVal(otp);
        if (props.onChange) {
            props.onChange(otp.join(""));
        }
    };
    const focusPrevious = (key: string, index: number) => {
        const otp = [...OTP];
        if (key === "Backspace" && index !== 0 && !otp[index]) {
            otp[index - 1] = "";
            setOtpVal(otp);
            otpTextInput[index - 1].focus();
            if (props.onChange) {
                props.onChange(otp.join(""));
            }
        }
    };
    return (
        <View style={[styles.container, props.style]}>
            {render}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    input: {
        textAlign: "center",
    }
});
