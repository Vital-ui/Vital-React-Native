import {
    Easing,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";


export const onChange = (
    active: boolean,
    setActive: (value: boolean) => void,
    onChange ?: (value: boolean) => void
) => {
    const temp = !active;
    setActive(temp);
    if (onChange) onChange(temp);
};




export const useThumbStyle = useAnimatedStyle((active: boolean) => {
    return {
        left: withTiming(active ? 23 : 3, {
            duration: 500,
            easing: Easing.out(Easing.exp),
        }),
        position: "absolute",
        top: 3
    };

});
