import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get("screen").width <= 545 ? Dimensions.get("screen").width : Dimensions.get("screen").width * 0.8;

export const fontSize = StyleSheet.create({
    Display1: {
        fontSize: width * 0.15,
    },
    Display2: {
        fontSize: width * 0.14,
    },
    Display3: {
        fontSize: width * 0.13,
    },
    Display4: {
        fontSize: width * 0.12,
    },
    Display5: {
        fontSize: width * 0.11,
    },
    Display6: {
        fontSize: width * 0.10,
    },
    H1: {
        fontSize: width * 0.09,
    },
    H2: {
        fontSize: width * 0.08,
    },
    H3: {
        fontSize: width * 0.07,
    },
    H4: {
        fontSize: width * 0.06,
    },
    H5: {
        fontSize: width * 0.05,
    },
    H6: {
        fontSize: width * 0.045,
    },
    H7: {
        fontSize: width * 0.04,
    },
    H8: {
        fontSize: width * 0.035,
    },
    H9: {
        fontSize: width * 0.03,
    },
});
