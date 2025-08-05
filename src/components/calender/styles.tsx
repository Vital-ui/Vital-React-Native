import { StyleSheet } from "react-native";
import { padding } from "../spacing/padding";

export const styles = StyleSheet.create({
    container: {
        borderWidth: StyleSheet.hairlineWidth * 2,
        borderColor: "rgb(228, 233, 242)",
        borderRadius: 4
    },
    daySeparatorLine: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgb(228, 233, 242)",
        borderRadius: 4
    },
    dayNamesContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        ...padding.pb1
    },
    dayNameContainer: {
        flex: 1,
        alignItems: "center"
    },
    dayNameText: {
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    }
}); 