import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function QuizStart({route}) {
    const {topic} = route.params;
   // console.log(route);
    const handleStartQuiz = () => {
        //console.log("Quiz started");
    }
    return (
        <View style = {styles.quizStartPage}>
            <Image 
                source={require("../assets/Icons/quizStart.jpg")}
                style = {styles.quizstartImage}
            />
            <Text style = {styles.quizStartTopic}>{topic}</Text>
            <View style = {styles.quizStartDesc}>
                <Text style = {styles.quizStartDescText}>No. of questions: 10</Text>
                <Text style = {styles.quizStartDescText}>Time per question: 15 seconds</Text>
            </View>
            <Pressable style = {styles.StartQuizButton} onPress={handleStartQuiz}>
                    <Text style = {styles.StartQuizButtonText}>Start Quiz</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    quizstartImage: {
        width: 0.8*width,
        height: 0.73* width,
        marginTop: 0.1*height,
        marginBottom: 0.07*height,
        alignSelf: "center"
    },
    quizStartPage: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    quizStartTopic: {
        fontSize: 0.04*height,
        fontFamily: 'Poppins_700Bold', 
        alignSelf: "center",
        color: "#FF2F74",
        marginBottom: 0.01*height
    },
    quizStartDescText: {
        fontFamily: 'Poppins_500Medium',
        color: "#5358DA",
        alignSelf: "center",
        fontSize: 0.018*height
    },
    quizStartDesc: {
        marginVertical: 0.04*height
    },
    StartQuizButton: {
        height: 0.07* height,
        width: 0.8*width,
        backgroundColor: "#5358DA",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0.08*height,
        borderRadius: 5,
        alignSelf: "center"
    }, 
    StartQuizButtonText: {
        color: "#ffffff", 
        fontSize: 16, 
        fontFamily: 'Poppins_500Medium',
    },
})