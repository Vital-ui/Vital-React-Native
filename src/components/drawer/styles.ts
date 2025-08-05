import {StyleSheet} from "react-native";

export const drawerStyles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
    },
    drawerRight: {
        position: "absolute",
        right: "-100%",
        top: 0,
        height: "100%",
        width: "50%",
        elevation: 5,
        backgroundColor: "#fff",
    },
    drawerLeft: {
        position: "absolute",
        left: "-100%",
        top: 0,
        height: "100%",
        width: "50%",
        elevation: 5,
        backgroundColor: "#fff",
    },
    drawerTop: {
        position: "absolute",
        left: 0,
        top: "-100%",
        width: "100%",
        height: "50%",
        elevation: 5,
        backgroundColor: "#fff",
    },
    drawerBottom: {
        position: "absolute",
        left: 0,
        top: "100%",
        width: "100%",
        height: "50%",
        elevation: 5,
        backgroundColor: "#fff",
    },
    heightWidthFull: {
        width: "100%",
        height: "100%",
    },
});
