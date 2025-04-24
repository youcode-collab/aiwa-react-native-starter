import { StyleSheet, Text, View } from 'react-native';

export default function OtherPage() {
    return (
        <View style={styles.container}>
            <Text>other</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        paddingHorizontal: 16,
    }
});