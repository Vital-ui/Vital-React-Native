import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    thumb: {
        backgroundColor: "#fff",
        height: 21,
        width: 21,
        borderRadius: 21,
        shadowColor: "#B0BAC5",
        elevation: 5,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    track: {
        width: 47,
        height: 27,
        borderRadius: 50,
        overflow: "hidden",
    },
    thumbContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2B3555",
        padding: 3,
        borderRadius: 20
    }
});
