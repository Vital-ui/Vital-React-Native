import {Text, View, StyleSheet} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Result: 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
