import React, {useContext, useMemo} from "react";
import LinearGradient from "react-native-linear-gradient";
import {Pressable, View} from "react-native";
import type {SwitchProps} from "./types";
import Animated from "react-native-reanimated";
import ThemeContext from "../context/context";
import {onChange, useThumbStyle} from "./helpers";
import {styles} from "./styles";

const Switch = (props: SwitchProps) => {
    const {theme} = useContext(ThemeContext);
    const [active, setActive] = React.useState(!!props.defaultValue);

    const colors = useMemo(() => {
        return Array.isArray(props.activeTrackColors)
            ? props.activeTrackColors
            :[props.activeTrackColors, props.activeTrackColors];
    }, [props.activeTrackColors]);

    React.useEffect(() => {
        if (props.value != undefined && props.value != active)
            setActive(props.value);
    }, [props.value]);

    const thumbStyle = useThumbStyle(active);

    return (
        <Pressable onPress={() => onChange(active, setActive, props.onChange)} disabled={props.disabled}>
            <LinearGradient
                colors={active ? colors : ["#00000000", "#00000000"]}
                start={props.start ?? {x: 0, y: 1}}
                end={props.end ?? {x: 1, y: 1}}
                style={[styles.track]}
            >
                <View
                    style={[styles.thumbContainer, {backgroundColor: active ? "#00000000" : theme.TextColor + "1A"}]}>
                    <Animated.View style={[styles.thumb, props.thumbStyle, thumbStyle]}/>
                </View>
            </LinearGradient>
        </Pressable>

    );
};

export default Switch;

