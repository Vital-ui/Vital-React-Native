import { StyleSheet, Dimensions } from 'react-native';

// TODO: Replace styles with library styles, padding, margin, borderRadius, width
const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: '#1F1F1F',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 15,
        color: '#fff',
        maxWidth: 2 * Dimensions.get('window').width / 3,
    },
});

export default styles;
