import {Dimensions, StyleSheet} from "react-native";

const height = Dimensions.get("screen").width <= 545 ? Dimensions.get("screen").height : Dimensions.get("screen").height * 1.2;

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
        margin: height * 0.005,
    },
    mx1: {
        marginHorizontal: height * 0.005,
    },
    my1: {
        marginVertical: height * 0.005,
    },
    mt1: {
        marginTop: height * 0.005,
    },
    mb1: {
        marginBottom: height * 0.005,
    },
    ms1: {
        marginStart: height * 0.005,
    },
    me1: {
        marginEnd: height * 0.005,
    },
    // Margin 2 Style
    m2: {
        margin: height * 0.01,
    },
    mx2: {
        marginHorizontal: height * 0.01,
    },
    my2: {
        marginVertical: height * 0.01,
    },
    mt2: {
        marginTop: height * 0.01,
    },
    mb2: {
        marginBottom: height * 0.01,
    },
    ms2: {
        marginStart: height * 0.01,
    },
    me2: {
        marginEnd: height * 0.01,
    },
    // Margin 3 Style
    m3: {
        margin: height * 0.015,
    },
    mx3: {
        marginHorizontal: height * 0.015,
    },
    my3: {
        marginVertical: height * 0.015,
    },
    mt3: {
        marginTop: height * 0.015,
    },
    mb3: {
        marginBottom: height * 0.015,
    },
    ms3: {
        marginStart: height * 0.015,
    },
    me3: {
        marginEnd: height * 0.015,
    },
    // Margin 4 Style
    m4: {
        margin: height * 0.02,
    },
    mx4: {
        marginHorizontal: height * 0.02,
    },
    my4: {
        marginVertical: height * 0.02,
    },
    mt4: {
        marginTop: height * 0.02,
    },
    mb4: {
        marginBottom: height * 0.02,
    },
    ms4: {
        marginStart: height * 0.02,
    },
    me4: {
        marginEnd: height * 0.02,
    },
    // Margin 5 Style
    m5: {
        margin: height * 0.03,
    },
    mx5: {
        marginHorizontal: height * 0.03,
    },
    my5: {
        marginVertical: height * 0.03,
    },
    mt5: {
        marginTop: height * 0.03,
    },
    mb5: {
        marginBottom: height * 0.03,
    },
    ms5: {
        marginStart: height * 0.03,
    },
    me5: {
        marginEnd: height * 0.03,
    },
});
