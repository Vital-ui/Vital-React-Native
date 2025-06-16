import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get("screen").width <= 545 ? Dimensions.get("screen").width : Dimensions.get("screen").width * 0.8;

export const borderRadius = StyleSheet.create({
    br0: {
        borderRadius: 0,
    },
    br1: {
        borderRadius: width * 0.01,
    },
    br2: {
        borderRadius: width * 0.02,
    },
    br3: {
        borderRadius: width * 0.03,
    },
    br4: {
        borderRadius: width * 0.04,
    },
    br5: {
        borderRadius: width * 0.05,
    },
    circle: {
        borderRadius: width,
    },
});
