import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Pressable,
    NativeSyntheticEvent,
    TextInputFocusEventData, Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SVGEyeOpen from "./eye-fill.svg";
import SVGEyeClose from "./eye-slash-fill.svg";
import ThemeContext from "../context/context";
import type {InputProps} from "./types";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import ComponentStyles from "./styles";

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
        const temp = {...props};
        const keys = Object.keys(temp);
        const tbd = ["textStyle", "inputStyle", "borderColor", "bgColor", "onFocusBorderColor", "onFocusBGColor", "secureTextEntry", "feedback", "onFocus", "onBlur", "inputLeft", "inputRight", "borderRadius", "floatingPlaceholder"];
        if (props.floatingPlaceholder) {
            tbd.push("placeholder");
            tbd.push("placeholderTextColor");
        }
        for (const key in tbd) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (keys.indexOf(tbd[key]) !== -1) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                delete temp[tbd[key]];
            }
        }
        setProps(temp);
    }, [props]);
    const onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        inFocus.value = true;
        if (props.onFocusBorderColor) {
            if (Array.isArray(props.onFocusBorderColor))
                setColor(props.onFocusBorderColor);
            else
                setColor([props.onFocusBorderColor, props.onFocusBorderColor]);
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

    const placeholderStyle = useAnimatedStyle(() => {
        return {

            position: "absolute",
            left: withTiming(inFocus.value || actualValue ? "1%" : "2%", {
                duration: 100,
                easing: Easing.out(Easing.quad),
            }),
            top: "50%",
            transform: [{
                translateY: withTiming(inFocus.value || actualValue ? (-1 * height2 / 2) + 3 : -1 * height / 2, {
                    duration: 100,
                    easing: Easing.out(Easing.quad),
                })
            }]
        };
    }, [inFocus, height, height2, actualValue]);

    const placeholderFontStyle = useAnimatedStyle(() => {
        const animatedFontSize = inFocus.value || actualValue ? props.floatingPlaceholderProps?.activeFontSize ? props.floatingPlaceholderProps?.activeFontSize : 12 : props.floatingPlaceholderProps?.fontSize ? props.floatingPlaceholderProps?.fontSize : 16;
        return {
            fontSize: withTiming(animatedFontSize, {
                duration: 100,
                easing: Easing.out(Easing.quad),
            }),
        };
    });
    
    
    return (
        <View style={[props.inputStyle, props.borderRadius]} onLayout={onLayout2}>
            <LinearGradient
                colors={color ? color : [context.theme.ThemeMuted, context.theme.ThemeMuted]}
                start={{x: 0, y: 1}} end={{x: 1, y: 1}}
                style={[{padding: 1, overflow: "hidden"}, props.borderRadius]}
            >
                <View
                    style={[ComponentStyles.inputBlock, props.borderRadius, {backgroundColor: bgColor ? bgColor : context.theme.Theme}]}>
                    {
                        props.inputLeft &&
                        <View style={ComponentStyles.inputLeft}>
                            {props.inputLeft}
                        </View>
                    }
                    <View style={[{flex: 1}, ComponentStyles.inputBlock, props.floatingPlaceholderProps?.containerStyle]}>
                        {
                            props.floatingPlaceholder && <Animated.View style={[placeholderStyle]} onLayout={onLayout}>
                                <Animated.Text style={[{
                                    ...context.fontConfig,
                                    color: props.placeholderTextColor ? props.placeholderTextColor : context.theme.TextColor
                                }, props.floatingPlaceholderProps?.textStyle, placeholderFontStyle]}>{props.placeholder}</Animated.Text>
                            </Animated.View>
                        }
                        <TextInput
                            style={[
                                {
                                    ...context.fontConfig,
                                    color: context.theme.TextColor
                                }, ComponentStyles.inputData, props.textStyle, props.borderRadius,
                                props.floatingPlaceholder ? {marginTop: 7} : {},
                                props.multiline && props.numberOfLines && props.numberOfLines > 0 ?
                                    {minHeight: (Platform.OS === 'ios') ? (20 * props.numberOfLines) : undefined}
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

                    {
                        props.secureTextEntry &&
                        <Pressable
                            style={ComponentStyles.inputRight}
                            onPress={() => setSecureTextEntry(!secureTextEntry)}>
                            {secureTextEntry
                                ? <SVGEyeClose fill={"#888888"} height={20} width={20}/>
                                : <SVGEyeOpen fill={"#888888"} height={20} width={20}/>
                            }
                        </Pressable>
                    }
                    {
                        props.inputRight &&
                        <View style={ComponentStyles.inputRight}>
                            {props.inputRight}
                        </View>
                    }
                </View>
            </LinearGradient>
            {props.feedback}
        </View>
    );
}


