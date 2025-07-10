import {Dimensions, StyleSheet} from "react-native";
import { padding } from "../../../spacing/padding";
import { borderRadius } from "../../../border/borderRadius";

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
        height: Dimensions.get("screen").width * 0.04,
        width: Dimensions.get("screen").width * 0.04,
    }
}); 