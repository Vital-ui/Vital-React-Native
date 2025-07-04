import React from "react";
import { View, TextInput, Platform } from "react-native";
import type { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ThemeContext from "../context/context";
import type { InputProps } from "./types";
import { SharedValue,  useSharedValue } from "react-native-reanimated";
import ComponentStyles from "./styles";
import FloatingPlaceholder from "./components/FloatingPlaceholder";
import InputAddon from "./components/InputAddon";
import PasswordToggle from "./components/PasswordToggle";

export default function Input(props: InputProps) {
    const context = React.useContext(ThemeContext);
    const inFocus: SharedValue<boolean> = useSharedValue(false);
    const [value, setValue] = React.useState(props.defaultValue ? props.defaultValue : props.value);
    const [secureTextEntry, setSecureTextEntry] = React.useState(false);
    const [color, setColor] = React.useState<[string, string]>();
    const [bgColor, setBGColor] = React.useState(props.styles?.background?.color);
    const [wrapperHeight, setWrapperHeight] = React.useState(20);

    const borderColor = props.styles?.border?.color;
    const onFocusBorderColor = props.styles?.border?.onFocusColor;
    const borderRadius = props.styles?.border?.radius;

    const actualValue = props.value === undefined ? value : props.value;

    // Filter out custom props to pass only native TextInput props
    const {
        styles,
        secureTextEntry: propSecureTextEntry,
        addons,
        placeholder,
        feedback,
        onFocus,
        onBlur,
        ...textInputProps
    } = props;

    React.useEffect(() => {
        onBlurHandler();
    }, []);
    
    const onFocusHandler = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        inFocus.value = true;
        if (onFocusBorderColor) {
            if (Array.isArray(onFocusBorderColor)) setColor(onFocusBorderColor);
            else setColor([onFocusBorderColor, onFocusBorderColor]);
        }
        if (props.styles?.background?.onFocusColor) {
            setBGColor(props.styles.background.onFocusColor);
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    const onBlurHandler = (event?: NativeSyntheticEvent<TextInputFocusEventData>) => {
        inFocus.value = false;
        if (borderColor) {
            if (Array.isArray(borderColor)) {
                setColor(borderColor);
            } else {
                setColor([borderColor, borderColor]);
            }
        } else {
            if (props.styles?.background?.color) {
                setColor([props.styles.background.color, props.styles.background.color]);
            }
        }
        if (props.styles?.background?.color) {
            setBGColor(props.styles.background.color);
        }
        if (onBlur && event) {
            onBlur(event);
        }
    };
    []
    const onWrapperLayout = (event: any) => {
        setWrapperHeight(event.nativeEvent.layout.height);
    };

    return (
        <View style={[styles?.wrapper, borderRadius]} onLayout={onWrapperLayout}>
            <LinearGradient
                colors={color ? color : [context.theme.ThemeMuted, context.theme.ThemeMuted]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={[ComponentStyles.inputWrapper, borderRadius]}
            >
                <View
                    style={[ComponentStyles.inputBlock, borderRadius, { backgroundColor: bgColor ? bgColor : context.theme.Theme }, styles?.input]}
                >
                    {addons?.left && <InputAddon position="left">{addons.left}</InputAddon>}
                    <View style={[{ flex: 1 }, ComponentStyles.inputBlock, placeholder?.floatingProps?.containerStyle]}>
                        {placeholder?.floating && (
                            <FloatingPlaceholder
                                placeholder={placeholder.text}
                                placeholderTextColor={placeholder.color as string | undefined}
                                floatingPlaceholderProps={placeholder.floatingProps as any}
                                inFocus={inFocus}
                                actualValue={actualValue}
                                wrapperHeight={wrapperHeight}
                            />
                        )}
                        <TextInput
                            style={[
                                {
                                    ...context.fontConfig,
                                    color: context.theme.TextColor
                                },
                                ComponentStyles.inputData,
                                styles?.text,
                                borderRadius,
                                placeholder?.floating ? { marginTop: 7 } : {},
                                props.multiline && props.numberOfLines && props.numberOfLines > 0
                                    ? { minHeight: Platform.OS === "ios" ? 20 * props.numberOfLines : undefined }
                                    : undefined
                            ]}
                            placeholderTextColor={placeholder?.color || context.theme.TextColor}
                            secureTextEntry={propSecureTextEntry && !secureTextEntry}
                            autoCapitalize="none"
                            onBlur={onBlurHandler}
                            onFocus={onFocusHandler}
                            {...textInputProps}
                            defaultValue={props.defaultValue}
                            value={actualValue}
                            placeholder={placeholder?.floating ? undefined : placeholder?.text}
                            onChangeText={(val) => {
                                if (props.onChangeText) {
                                    props.onChangeText(val);
                                }
                                setValue(val);
                            }}
                        />
                    </View>
                    {propSecureTextEntry && (
                        <PasswordToggle secure={secureTextEntry} onPress={() => setSecureTextEntry(!secureTextEntry)} />
                    )}
                    {addons?.right && <InputAddon position="right">{addons.right}</InputAddon>}
                </View>
            </LinearGradient>
            {feedback?.node}
        </View>
    );
}


