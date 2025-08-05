import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width / 24,
    },
    containerFluid: {
        paddingHorizontal: 0,
    },
    headerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titleStyle: {
        flexDirection: "row",
        alignItems: "center",
    }
});
export default styles;
