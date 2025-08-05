import { StyleSheet } from "react-native";
import { padding } from "../../../spacing/padding";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    activeDateBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    inactiveDateBackground: {
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth * 2
    },
    dateContainer: {
        ...padding.py3,
        width: "100%"
    },
    dateText: {
        textAlign: "center",
        fontWeight: "bold"
    }
}); 