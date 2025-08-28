import React, {useContext, useMemo} from "react";
import LinearGradient from "react-native-linear-gradient";
import {Pressable, View} from "react-native";
import type {SwitchProps} from "./types";
import Animated from "react-native-reanimated";
import ThemeContext from "../context/context";
import {onSwitch, useThumbStyle} from "./helpers";
import {componentStyles} from "./styles";

const Switch = (props: SwitchProps) => {
    const {
        styles,
        defaultValue,
        value,
        onChange,
        isDark,
        disabled
    } = props;
    const {theme} = useContext(ThemeContext);
    const [active, setActive] = React.useState(!!defaultValue);

    const colors = useMemo(() => {
        return Array.isArray(styles.activeTrackColors)
            ? styles.activeTrackColors
            :[styles.activeTrackColors, styles.activeTrackColors];
    }, [styles.activeTrackColors]);

    React.useEffect(() => {
        if (value != undefined && value != active)
            setActive(value);
    }, [value]);

    const thumbStyle = useThumbStyle(active);

    return (
        <Pressable onPress={() => onSwitch(active, setActive, onChange)} disabled={disabled}>
            <LinearGradient
                colors={active ? colors : ["#00000000", "#00000000"]}
                start={styles.start ?? {x: 0, y: 1}}
                end={styles.end ?? {x: 1, y: 1}}
                style={[componentStyles.track]}
            >
                <View
                    style={[componentStyles.thumbContainer, {backgroundColor: active ? "#00000000" : theme.TextColor + "1A"}]}>
                    <Animated.View style={[componentStyles.thumb, styles.thumbStyle, thumbStyle]}/>
                </View>
            </LinearGradient>
        </Pressable>

    );
};

export default Switch;

