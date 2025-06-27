import {StyleSheet} from "react-native";
import {rem, BASE_SPACING} from '../typography/config';

export const padding = StyleSheet.create({
    // Padding 0 Style
    p0: {
        padding: 0,
    },
    px0: {
        paddingHorizontal: 0,
    },
    py0: {
        paddingVertical: 0,
    },
    pt0: {
        paddingTop: 0,
    },
    pb0: {
        paddingBottom: 0,
    },
    ps0: {
        paddingStart: 0,
    },
    pe0: {
        paddingEnd: 0,
    },
    // Padding 1 Style
    p1: {
        padding: rem(BASE_SPACING), // 4px
    },
    px1: {
        paddingHorizontal: rem(BASE_SPACING),
    },
    py1: {
        paddingVertical: rem(BASE_SPACING),
    },
    pt1: {
        paddingTop: rem(BASE_SPACING),
    },
    pb1: {
        paddingBottom: rem(BASE_SPACING),
    },
    ps1: {
        paddingStart: rem(BASE_SPACING),
    },
    pe1: {
        paddingEnd: rem(BASE_SPACING),
    },
    // Padding 2 Style
    p2: {
        padding: rem(BASE_SPACING * 2), // 8px
    },
    px2: {
        paddingHorizontal: rem(BASE_SPACING * 2),
    },
    py2: {
        paddingVertical: rem(BASE_SPACING * 2),
    },
    pt2: {
        paddingTop: rem(BASE_SPACING * 2),
    },
    pb2: {
        paddingBottom: rem(BASE_SPACING * 2),
    },
    ps2: {
        paddingStart: rem(BASE_SPACING * 2),
    },
    pe2: {
        paddingEnd: rem(BASE_SPACING * 2),
    },
    // Padding 3 Style
    p3: {
        padding: rem(BASE_SPACING * 3), // 12px
    },
    px3: {
        paddingHorizontal: rem(BASE_SPACING * 3),
    },
    py3: {
        paddingVertical: rem(BASE_SPACING * 3),
    },
    pt3: {
        paddingTop: rem(BASE_SPACING * 3),
    },
    pb3: {
        paddingBottom: rem(BASE_SPACING * 3),
    },
    ps3: {
        paddingStart: rem(BASE_SPACING * 3),
    },
    pe3: {
        paddingEnd: rem(BASE_SPACING * 3),
    },
    // Padding 4 Style
    p4: {
        padding: rem(BASE_SPACING * 4), // 16px
    },
    px4: {
        paddingHorizontal: rem(BASE_SPACING * 4),
    },
    py4: {
        paddingVertical: rem(BASE_SPACING * 4),
    },
    pt4: {
        paddingTop: rem(BASE_SPACING * 4),
    },
    pb4: {
        paddingBottom: rem(BASE_SPACING * 4),
    },
    ps4: {
        paddingStart: rem(BASE_SPACING * 4),
    },
    pe4: {
        paddingEnd: rem(BASE_SPACING * 4),
    },
    // Padding 5 Style
    p5: {
        padding: rem(BASE_SPACING * 5), // 24px
    },
    px5: {
        paddingHorizontal: rem(BASE_SPACING * 5),
    },
    py5: {
        paddingVertical: rem(BASE_SPACING * 5),
    },
    pt5: {
        paddingTop: rem(BASE_SPACING * 5),
    },
    pb5: {
        paddingBottom: rem(BASE_SPACING * 5),
    },
    ps5: {
        paddingStart: rem(BASE_SPACING * 5),
    },
    pe5: {
        paddingEnd: rem(BASE_SPACING * 5),
    },
});
