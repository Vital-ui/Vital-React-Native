import {Dimensions, StyleSheet} from "react-native";

const height = Dimensions.get("screen").width <= 545 ? Dimensions.get("screen").height : Dimensions.get("screen").height * 1.2;

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
        padding: height * 0.005,
    },
    px1: {
        paddingHorizontal: height * 0.005,
    },
    py1: {
        paddingVertical: height * 0.005,
    },
    pt1: {
        paddingTop: height * 0.005,
    },
    pb1: {
        paddingBottom: height * 0.005,
    },
    ps1: {
        paddingStart: height * 0.005,
    },
    pe1: {
        paddingEnd: height * 0.005,
    },
    // Padding 2 Style
    p2: {
        padding: height * 0.01,
    },
    px2: {
        paddingHorizontal: height * 0.01,
    },
    py2: {
        paddingVertical: height * 0.01,
    },
    pt2: {
        paddingTop: height * 0.01,
    },
    pb2: {
        paddingBottom: height * 0.01,
    },
    ps2: {
        paddingStart: height * 0.01,
    },
    pe2: {
        paddingEnd: height * 0.01,
    },
    // Padding 3 Style
    p3: {
        padding: height * 0.015,
    },
    px3: {
        paddingHorizontal: height * 0.015,
    },
    py3: {
        paddingVertical: height * 0.015,
    },
    pt3: {
        paddingTop: height * 0.015,
    },
    pb3: {
        paddingBottom: height * 0.015,
    },
    ps3: {
        paddingStart: height * 0.015,
    },
    pe3: {
        paddingEnd: height * 0.015,
    },
    // Padding 4 Style
    p4: {
        padding: height * 0.02,
    },
    px4: {
        paddingHorizontal: height * 0.02,
    },
    py4: {
        paddingVertical: height * 0.02,
    },
    pt4: {
        paddingTop: height * 0.02,
    },
    pb4: {
        paddingBottom: height * 0.02,
    },
    ps4: {
        paddingStart: height * 0.02,
    },
    pe4: {
        paddingEnd: height * 0.02,
    },
    // Padding 5 Style
    p5: {
        padding: height * 0.03,
    },
    px5: {
        paddingHorizontal: height * 0.03,
    },
    py5: {
        paddingVertical: height * 0.03,
    },
    pt5: {
        paddingTop: height * 0.03,
    },
    pb5: {
        paddingBottom: height * 0.03,
    },
    ps5: {
        paddingStart: height * 0.03,
    },
    pe5: {
        paddingEnd: height * 0.03,
    },
});
