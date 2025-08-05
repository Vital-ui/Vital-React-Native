import {StyleSheet} from "react-native";

export const segmentedTabStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        overflow: "hidden",
    },
    animatedTab: {
        position: "absolute",
        height: "100%",
        left: 0,
        top: 0,
    },
    gradient: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
