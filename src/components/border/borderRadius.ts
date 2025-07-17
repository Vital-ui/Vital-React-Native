import {StyleSheet} from "react-native";
import {rem} from "../typography/config"

export const borderRadius = StyleSheet.create({
    br0: {
        borderRadius: 0, // Tailwind: rounded-none
    },
    br1: {
        borderRadius: rem(0.125), // Tailwind: rounded-sm (2px)
    },
    br2: {
        borderRadius: rem(0.25), // Tailwind: rounded (4px)
    },
    br3: {
        borderRadius: rem(0.375), // Tailwind: rounded-md (6px)
    },
    br4: {
        borderRadius: rem(0.5), // Tailwind: rounded-lg (8px)
    },
    br5: {
        borderRadius: rem(0.75), // Tailwind: rounded-xl (12px)
    },
    br6: {
        borderRadius: rem(1), // Tailwind: rounded-2xl (16px)
    },
    br7: {
        borderRadius: rem(1.5), // Tailwind: rounded-3xl (24px)
    },
    circle: {
        borderRadius: 9999, // Tailwind: rounded-full
    },
});
