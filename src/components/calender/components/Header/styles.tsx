import { StyleSheet } from "react-native";
import { padding } from "../../../spacing/padding";
import { borderRadius } from "../../../border/borderRadius";
import { width } from "../../../width/width";
import { height } from "../../../height/height";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...padding.p2
    },
    headerText: {
        fontWeight: "bold",
        ...padding.px3,
        ...padding.py2
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        ...padding.px3,
        ...padding.py2,
        ...borderRadius.br2
    },
    buttonImage: {
        ...width.w4,
        ...height.h4
    }
}); 