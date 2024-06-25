import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");


export default function LoadIndicator() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator}/>
            <Text style = {styles.loadText}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadText: {
        fontSize: 22,
        marginTop: 0.02*height
    },
    activityIndicator: {
        marginBottom: 20, 
        transform: [{ scale: 2 }] 
    }
})
