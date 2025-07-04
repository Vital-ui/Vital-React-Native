import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputWrapper: {
        padding: 1,
        overflow: "hidden"
    },
    inputBlock: {
        flexDirection: "row",
        alignItems: "center"
    },
    inputLeft: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 5,
        paddingLeft: 10
    },
    inputRight: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 10,
        paddingLeft: 5
    },
    inputData: {
        flex: 1,
        backgroundColor: "transparent"
    }
});

export default styles;