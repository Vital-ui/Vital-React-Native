import React, {useContext} from "react";
import LinearGradient from "react-native-linear-gradient";
import {TouchableOpacity, View, ActivityIndicator, StyleSheet} from "react-native";
import ThemeContext from "../context/context";
import type {ButtonType} from "./types";
import {componentStyles} from "./styles";


export default function Button(props: ButtonType) {
    const {
        styles,
        state,
        addons,
        onPress,
        touchableOpacityProps,
        children
    } = props;
    const {theme} = useContext(ThemeContext);
    const colors = React.useMemo(() => {
        if (styles?.gradient) {
            if (Array.isArray(styles.color)) {
                return styles.color;
            }
        }
        if(typeof styles ?.color === "string") {
            return [styles?.color, styles?.color];
        }
        return [theme.ThemeMuted, theme.ThemeMuted];
    }, [styles?.gradient, styles?.color, theme]);

    const gradientStart = styles?.start ?? {x: 0.0, y: 1.0};
    const gradientEnd = styles?.end ?? {x: 1.0, y: 1.0};

    const linearGradientStyle = [
        {overflow: "hidden"},
        styles?.borderRadius,
        styles?.margin,
        styles?.bordered && {padding: StyleSheet.hairlineWidth * 4},
    ];

    const touchableStyle = [
        styles?.padding,
        styles?.bordered && {
            backgroundColor: styles?.backgroundColor ?? theme.Theme,
        },
        styles?.borderRadius,
    ];


    return (
        <LinearGradient
            colors={colors}
            start={gradientStart}
            end={gradientEnd}
            style={linearGradientStyle}
        >
            <TouchableOpacity
                activeOpacity={0.65}
                onPress={onPress}
                disabled={state?.loading || state?.disabled}
                style={touchableStyle}
                {...touchableOpacityProps}
            >
                <View style={componentStyles.buttonWrapper}>
                    {state?.loading &&
                                <ActivityIndicator style={componentStyles.loadingIndicator}
                                    color={"white"}/>}
                    {addons?.left}
                    <View
                        style={[addons?.left && componentStyles.leftSpacing, addons?.right && componentStyles.rightSpacing, {flexDirection: "row"}]}>
                        {children}
                    </View>
                    {addons?.right}
                </View>
            </TouchableOpacity>
        </LinearGradient>

    );
}

