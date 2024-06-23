import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
const { width, height } = Dimensions.get("window");


export default function Result({route}) {
    console.log(route.params.score);
    return (
        <View>
            <Text style = {styles.pageHeader}>Result</Text>
            <Image 
                source={require("../assets/Icons/result.png")}
                style = {styles.resultImage}
            />
            <Text>Congratulations</Text>
            <Text>You successfully completed the quiz with</Text>
            <Text>Your Score: <Text>{route.params.score}</Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {

    },
    resultImage: {
        
    }
})
