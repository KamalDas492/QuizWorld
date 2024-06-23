import { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";



export default function Timer({ duration = 30 }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const animatedWidth = useRef(new Animated.Value(1)).current; // 1 represents 100%

    useEffect(() => {
        if (timeLeft === 0) {
            // Handle time up logic here
            console.log("Time's up!");
            return;
        }

        // Start the countdown
        const intervalId = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        // Start the animation
        Animated.timing(animatedWidth, {
            toValue: 0, // 0 represents 0%
            duration: timeLeft * 1000, // Total duration in milliseconds
            easing: Easing.linear,
            useNativeDriver: false, // We are animating width, so set to false
        }).start();

        return () => {
            clearInterval(intervalId);
            animatedWidth.stopAnimation(); // Stop the animation if the component unmounts
        };
    }, [timeLeft, duration, animatedWidth]);

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Animated.View
                    style={[
                        styles.timerBar,
                        {
                            width: animatedWidth.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0%', '100%'], // Animate width from 100% to 0%
                            }),
                        },
                    ]}
                />
            </View>
            <Text style={styles.timerText}>{timeLeft}s</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    timerContainer: {
        width: '80%', // Adjust width as needed
        height: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },
    timerBar: {
        height: '100%',
        backgroundColor: 'lightgreen',
        borderRadius: 10,
    },
    timerText: {
        marginTop: 10,
        fontSize: 18,
    },
});
