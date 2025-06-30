import {StyleSheet} from "react-native";
import {rem} from './config';

export const fontSize = StyleSheet.create({
    H1: {
        fontSize: rem(2), // 32px - browser default
    },
    H2: {
        fontSize: rem(1.5), // 24px - browser default
    },
    H3: {
        fontSize: rem(1.17), // 18.72px - browser default
    },
    H4: {
        fontSize: rem(1), // 16px - browser default
    },
    H5: {
        fontSize: rem(0.83), // 13.28px - browser default
    },
    H6: {
        fontSize: rem(0.67), // 10.72px - browser default
    },
    H7: {
        fontSize: rem(0.5), // 8px
    },
    H8: {
        fontSize: rem(0.375), // 6px
    },
    H9: {
        fontSize: rem(0.25), // 4px
    },
});
