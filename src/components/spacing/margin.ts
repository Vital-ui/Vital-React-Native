import {StyleSheet} from "react-native";
import {rem, BASE_SPACING} from '../typography/config';

export const margin = StyleSheet.create({
    // Margin 0 Style
    m0: {
        margin: 0,
    },
    mx0: {
        marginHorizontal: 0,
    },
    my0: {
        marginVertical: 0,
    },
    mt0: {
        marginTop: 0,
    },
    mb0: {
        marginBottom: 0,
    },
    ms0: {
        marginStart: 0,
    },
    me0: {
        marginEnd: 0,
    },
    // Margin 1 Style
    m1: {
        margin: rem(BASE_SPACING), // 4px
    },
    mx1: {
        marginHorizontal: rem(BASE_SPACING),
    },
    my1: {
        marginVertical: rem(BASE_SPACING),
    },
    mt1: {
        marginTop: rem(BASE_SPACING),
    },
    mb1: {
        marginBottom: rem(BASE_SPACING),
    },
    ms1: {
        marginStart: rem(BASE_SPACING),
    },
    me1: {
        marginEnd: rem(BASE_SPACING),
    },
    // Margin 2 Style
    m2: {
        margin: rem(BASE_SPACING * 2), // 8px
    },
    mx2: {
        marginHorizontal: rem(BASE_SPACING * 2),
    },
    my2: {
        marginVertical: rem(BASE_SPACING * 2),
    },
    mt2: {
        marginTop: rem(BASE_SPACING * 2),
    },
    mb2: {
        marginBottom: rem(BASE_SPACING * 2),
    },
    ms2: {
        marginStart: rem(BASE_SPACING * 2),
    },
    me2: {
        marginEnd: rem(BASE_SPACING * 2),
    },
    // Margin 3 Style
    m3: {
        margin: rem(BASE_SPACING * 3), // 12px
    },
    mx3: {
        marginHorizontal: rem(BASE_SPACING * 3),
    },
    my3: {
        marginVertical: rem(BASE_SPACING * 3),
    },
    mt3: {
        marginTop: rem(BASE_SPACING * 3),
    },
    mb3: {
        marginBottom: rem(BASE_SPACING * 3),
    },
    ms3: {
        marginStart: rem(BASE_SPACING * 3),
    },
    me3: {
        marginEnd: rem(BASE_SPACING * 3),
    },
    // Margin 4 Style
    m4: {
        margin: rem(BASE_SPACING * 4), // 16px
    },
    mx4: {
        marginHorizontal: rem(BASE_SPACING * 4),
    },
    my4: {
        marginVertical: rem(BASE_SPACING * 4),
    },
    mt4: {
        marginTop: rem(BASE_SPACING * 4),
    },
    mb4: {
        marginBottom: rem(BASE_SPACING * 4),
    },
    ms4: {
        marginStart: rem(BASE_SPACING * 4),
    },
    me4: {
        marginEnd: rem(BASE_SPACING * 4),
    },
    // Margin 5 Style
    m5: {
        margin: rem(BASE_SPACING * 5), // 24px
    },
    mx5: {
        marginHorizontal: rem(BASE_SPACING * 5),
    },
    my5: {
        marginVertical: rem(BASE_SPACING * 5),
    },
    mt5: {
        marginTop: rem(BASE_SPACING * 5),
    },
    mb5: {
        marginBottom: rem(BASE_SPACING * 5),
    },
    ms5: {
        marginStart: rem(BASE_SPACING * 5),
    },
    me5: {
        marginEnd: rem(BASE_SPACING * 5),
    },
});
