import React from "react";
import { View, TextInput, Platform } from "react-native";
import type { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ThemeContext from "../context/context";
import type { InputProps } from "./types";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import ComponentStyles from "./styles";
import FloatingPlaceholder from "./components/FloatingPlaceholder";
import InputLeft from "./components/InputLeft";
import InputRight from "./components/InputRight";
import PasswordToggle from "./components/PasswordToggle";

export default function Input(props: InputProps) {
    const context = React.useContext(ThemeContext);
    const inFocus = useSharedValue(false);
    const [value, setValue] = React.useState(props.defaultValue ? props.defaultValue : props.value);
    const [secureTextEntry, setSecureTextEntry] = React.useState(false);
    const [color, setColor] = React.useState<[string, string]>();
    const [bgColor, setBGColor] = React.useState(props.bgColor);
    const [inputProps, setProps] = React.useState({});
    const [height, setHeight] = React.useState(20);
    const [height2, setHeight2] = React.useState(20);

    const actualValue = props.value === undefined ? value : props.value;

    React.useEffect(() => {
        onBlur();
    }, []);
    React.useEffect(() => {
        const temp : InputProps = { ...props };
        const keys = Object.keys(temp);
        const tbd: string[] = [
            "textStyle",
            "inputStyle",
            "borderColor",
            "bgColor",
            "onFocusBorderColor",
            "onFocusBGColor",
            "secureTextEntry",
            "feedback",
            "onFocus",
            "onBlur",
            "inputLeft",
            "inputRight",
            "borderRadius",
            "floatingPlaceholder"
        ];
        if (props.floatingPlaceholder) {
            tbd.push("placeholder");
            tbd.push("placeholderTextColor");
        }
        for (const key in tbd) {
            if (keys.indexOf(tbd[key] as string) !== -1) {
                delete temp[tbd[key] as keyof typeof temp];
            }
        }
        setProps(temp);
    }, [props]);
    const onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        inFocus.value = true;
        if (props.onFocusBorderColor) {
            if (Array.isArray(props.onFocusBorderColor)) setColor(props.onFocusBorderColor);
            else setColor([props.onFocusBorderColor, props.onFocusBorderColor]);
        }
        if (props.onFocusBGColor) {
            setBGColor(props.onFocusBGColor);
        }
        if (props.onFocus) {
            props.onFocus(event);
        }
    };
    const onBlur = (event?: NativeSyntheticEvent<TextInputFocusEventData>) => {
        inFocus.value = false;
        if (props.borderColor) {
            if (Array.isArray(props.borderColor)) {
                setColor(props.borderColor);
            } else {
                setColor([props.borderColor, props.borderColor]);
            }
        } else {
            if (props.bgColor) {
                setColor([props.bgColor, props.bgColor]);
            }
        }
        if (props.bgColor) {
            setBGColor(props.bgColor);
        }
        if (props.onBlur && event) {
            props.onBlur(event);
        }
    };
    const onLayout = (event: any) => {
        setHeight(event.nativeEvent.layout.height);
    };
    const onLayout2 = (event: any) => {
        setHeight2(event.nativeEvent.layout.height);
    };

    return (
        <View style={[props.inputStyle, props.borderRadius]} onLayout={onLayout2}>
            <LinearGradient
                colors={color ? color : [context.theme.ThemeMuted, context.theme.ThemeMuted]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={[{ padding: 1, overflow: "hidden" }, props.borderRadius]}
            >
                <View
                    style={[ComponentStyles.inputBlock, props.borderRadius, { backgroundColor: bgColor ? bgColor : context.theme.Theme }]}
                >
                    {props.inputLeft && <InputLeft>{props.inputLeft}</InputLeft>}
                    <View style={[{ flex: 1 }, ComponentStyles.inputBlock, props.floatingPlaceholderProps?.containerStyle]}>
                        {props.floatingPlaceholder && (
                            <FloatingPlaceholder
                                placeholder={props.placeholder}
                                placeholderTextColor={props.placeholderTextColor as string | undefined}
                                floatingPlaceholderProps={props.floatingPlaceholderProps as any}
                                context={context}
                                inFocus={inFocus}
                                actualValue={actualValue}
                                height={height}
                                height2={height2}
                                onLayout={onLayout}
                                useAnimatedStyle={useAnimatedStyle}
                            />
                        )}
                        <TextInput
                            style={[
                                {
                                    ...context.fontConfig,
                                    color: context.theme.TextColor
                                },
                                ComponentStyles.inputData,
                                props.textStyle,
                                props.borderRadius,
                                props.floatingPlaceholder ? { marginTop: 7 } : {},
                                props.multiline && props.numberOfLines && props.numberOfLines > 0
                                    ? { minHeight: Platform.OS === "ios" ? 20 * props.numberOfLines : undefined }
                                    : undefined
                            ]}
                            placeholderTextColor={context.theme.TextColor}
                            secureTextEntry={props.secureTextEntry && !secureTextEntry}
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onFocus={onFocus}
                            {...inputProps}
                            defaultValue={props.defaultValue}
                            value={actualValue}
                            onChangeText={(val) => {
                                if (props.onChangeText) {
                                    props.onChangeText(val);
                                }
                                setValue(val);
                            }}
                        />
                    </View>
                    {props.secureTextEntry && (
                        <PasswordToggle secure={secureTextEntry} onPress={() => setSecureTextEntry(!secureTextEntry)} />
                    )}
                    {props.inputRight && <InputRight>{props.inputRight}</InputRight>}
                </View>
            </LinearGradient>
            {props.feedback}
        </View>
    );
}


