import { Dimensions, StyleSheet } from 'react-native';
const {height: SCREEN_HEIGHT} = Dimensions.get("screen");

export const componentStyles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    loadingIndicator: {
        marginEnd: SCREEN_HEIGHT * 0.01,
    },
    leftSpacing: {
        marginStart: SCREEN_HEIGHT * 0.01,
    },
    rightSpacing: {
        marginEnd: SCREEN_HEIGHT * 0.01,
    },

});

