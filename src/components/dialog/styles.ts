import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#30303add"
    },
    modalContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: Dimensions.get("screen").width * 11 / 12,
        borderRadius: Dimensions.get("screen").width * 0.02,
        elevation: 50,
        overflow: "hidden",
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: Dimensions.get("window").width * 0.05,
    },
    modalHeaderText: {
        flex: 11,
    },
    modalHeaderBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    modalBody: {
        padding: Dimensions.get("window").width * 0.05,
    },
});
