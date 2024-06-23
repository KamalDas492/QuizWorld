import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fetchQuestions from "./../services/fetchQuestions"
const { width, height } = Dimensions.get("window");


export default function Quiz({route, navigation}) {
    const duration = 20;
    const quizTopic = route.params.quizTopic;
    const [questions, setQuestions] = useState([]);
    const [currentOptions, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [quesIndex, setQuesIndex] = useState(0);
    const [IsSelected, setIsSelected] = useState(false);
    const [pressedIndex, setPressedIndex] = useState(-1);
    const [timeLeft, setTimeLeft] = useState(duration);
    const [score, setScore] = useState(0);
    const numQuestions = 10;
    const animatedWidth = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const questions = await fetchQuestions(quizTopic, numQuestions);
                setQuestions(questions);
                setIsLoading(false);
                Animated.setValue(1);
                //console.log(questions);
            } catch(err) {
                console.log(err);
            }
        };
            
        loadQuestions();
    }, [quizTopic])

    useEffect(() => {
        if(questions.length > 0) {
             const options = [questions[quesIndex]["Option A"], questions[quesIndex]["Option B"], questions[quesIndex]["Option C"], questions[quesIndex]["Option D"]];
            setOptions(options);
        }
        setIsSelected(false);
        setPressedIndex(-1);
        setTimeLeft(duration);
        animatedWidth.setValue(1);
    }, [questions, quesIndex])

    useEffect(() => {
        if(timeLeft == 0) {
            setQuesIndex(quesIndex + 1);
            setTimeLeft(duration);
            animatedWidth.setValue(1);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(timeLeft - 1);
            //console.log(timeLeft);
        }, 1000)

        Animated.timing(animatedWidth, {
            toValue: 0, 
            duration: timeLeft * 1000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        return () => {
            clearInterval(timer);
            animatedWidth.stopAnimation();
        }
    }, [timeLeft, animatedWidth])

    const handleSelectAnswer = (option, index) => {
        if(!IsSelected) {
            setIsSelected(true);
            setPressedIndex(index);
            if(questions[quesIndex]["Correct Ans"] == option) {
                setScore(score + 1);
            }
        }
    }

    const handleNextButtonClicked = () => {
        setQuesIndex(quesIndex + 1);

    }
    if(isLoading) {
        return (
            <View>
                <Text>Is Loading</Text>
            </View>
        )
    } else {
    return (
        <View style = {styles.Quiz}>
        <View style = {styles.topArea}>
            <Text style = {styles.topic}>{quizTopic}</Text>
            <Text style = {styles.quizNum}>Question {quesIndex + 1}<Text style = {styles.quizNumTotal}>/10</Text></Text>
        </View>
        <View style = {styles.questionArea}>
            <View style = {styles.timerArea}>
            <View style={styles.timerContainer}>
                <Animated.View
                    style={[
                        styles.timerBar,
                        {
                            width: animatedWidth.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0%', '100%'], 
                            }),
                        },
                    ]}
                />
            </View>
            </View>
            <Text style = {styles.question}>{questions[quesIndex].Question}</Text>
            {currentOptions.map((option, index) => (
                <Pressable 
                    key={index}
                    onPress={() => handleSelectAnswer(option, index)}
                    style = {
                        [styles.Option, index == pressedIndex ? (currentOptions[pressedIndex] == questions[quesIndex]["Correct Ans"] ? styles.correctPressed : styles.wrongPressed) : styles.optionNotPressed]
                    }
                >
                <Text style = {[styles.optionText, index == pressedIndex ? (currentOptions[pressedIndex] == questions[quesIndex]["Correct Ans"] ? styles.correctPressedText : styles.wrongPressedText) : styles.optionText]}>{option}</Text>
                </Pressable>
            ))}
            {quesIndex < numQuestions - 1 ? (
                <Pressable onPress={handleNextButtonClicked}>
                    <Text style = {styles.submitBtn}>Next Question</Text>
                </Pressable>
             ) : (
                <Pressable onPress={() => {navigation.navigate("Result", {score: score})}}>
                    <Text style = {styles.submitBtn}>Submit</Text>
                </Pressable>
            )}
            </View>
        </View>
    )
}
}


const styles = StyleSheet.create({
    Option: {
        paddingHorizontal: 0.03*width,
        paddingVertical: 0.02*height,
        marginTop: 0.02*height,
        borderRadius: 5
    },
    optionText: {
        fontSize: 0.018*height,
        fontFamily: 'Poppins_600SemiBold',
    },
    optionNotPressed: {
        borderWidth: 1,
    },
    correctPressed: {
        borderColor: "#32CD32",
        borderWidth: 3,
        backgroundColor: "rgba(50, 205, 50, 0.2)"
    },
    wrongPressed: {
        borderColor: "red",
        borderWidth: 3,
        backgroundColor: "rgba(255, 0, 0, 0.06)"
    },
    correctPressedText: {
        color: "#32CD32",
    },
    wrongPressedText: {
        color: "red",
    },
    topArea: {
        minHeight: 0.15*height,
        backgroundColor:"#fff"
    },
    topic: {
        fontSize: 0.05*width,
        fontFamily: 'Poppins_700Bold', 
        color: "#FF2F74",
        textAlign: "center",
        marginTop: 0.03*height
    },
    questionArea: {
        backgroundColor: "#f8f5f5",
        minHeight: 0.85*height,
        paddingHorizontal: 0.06*width,
        paddingTop: 0.03*height
    },
    Quiz: {
        backgroundColor: "#f8f5f5"
    },
    quizNum: {
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: 17,
        position: "relative",
        bottom: -0.03*height,
        marginLeft: 0.05*width
    },
    quizNumTotal: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium', 
    },
    timerArea: {
        minHeight: 0.05*height,
        marginBottom: 0.03*height,
        justifyContent: "center"
    },
    question: {
        fontSize: 0.05*width,
        fontFamily: 'Poppins_700Bold',
        minHeight: 0.15*height,
        textAlign: "center"
    },
    submitBtn: {
        paddingHorizontal: 0.03*width,
        paddingVertical: 0.025*height,
        marginTop: 0.05*height,
        borderRadius: 5,
        fontSize: 0.02*height,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: "center",
        backgroundColor: "#FF2F74",
        color: "white"
    },
    timerContainer: {
        height: 0.03*height,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },
    timerBar: {
        height: '100%',
        backgroundColor: '#7E4EE1',
        borderRadius: 10,
    },
})