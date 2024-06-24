import { Dimensions, Image, Pressable, Share, StyleSheet, Text, View } from "react-native"

const { width, height } = Dimensions.get("window");


export default function Result({route}) {
    const score = route.params.score;
    const coins = Math.floor(score/2);

    const handleShare = async () => {
       /* const shareOptions = {
            title: "Quiz Score",
            message: "I scored ${score} in the QuizWorld App!",
            failOnCancel: false,
        }
        Share.open(shareOptions)
        .then((res) => console.log("Success", res))
        .catch((err) => console.log(err)); */
        try { 
            await Share.share({ 
                title: "Quiz Score",
                message: `I have scored ${score} in the QuizWorld App! Play amazing Quizzes on QuizWorld Apps.`, 
            }); 
        } catch (error) { 
            alert(error.message); 
        } 
        
    }
    
    //console.log(route.params.score);
    return (
        
        <View style = {styles.resultPage}>
            <Text style = {styles.pageHeader}>Result</Text>
            <Image 
                source={require("../assets/Icons/result.png")}
                style = {styles.resultImage}
            />
            <Text style = {{fontFamily: 'Poppins_600SemiBold', fontSize: 0.035*height, color: "#FF2F74"}}>Congratulations</Text>
            <Text style = {{fontFamily: 'Poppins_500Medium', fontSize: 0.015*height}}>You have successfully completed the quiz</Text>
            <View style = {styles.rewards}>
            <Text style = {[styles.rewardText, {color: "#3F6CDF"}]}>Your Score:   <Text style = {{color: "#2727BC", fontSize:  0.027*height}}>{score}</Text></Text>
            <View style = {styles.coinSection}>
            <Text style = {[styles.rewardText, {color: "#3F6CDF"}]}>Won:  <Text style = {[styles.rewardText, {color: "#2727BC", fontSize:  0.025*height,}]}>
            <Image 
                source={require("../assets/Icons/dollar.png")}
                style = {styles.coinImage}
            /> {coins}</Text>
            </Text>
            </View>
            </View>
            <Pressable
                style = {styles.shareBtn}
                onPress={handleShare}
            >
            <Text style = {styles.shareText}> Share </Text>

            </Pressable>
        </View>
       
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        fontSize: 0.03*height,
        fontFamily: 'Poppins_700Bold',
        marginVertical: 0.04*height,
        color: "#2727BC"
    },
    resultImage: {
        width: 0.7*width,
        height: 0.7*width,
        marginBottom: 0.05*height
    },
    resultPage: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 1
    },
    rewards: {
        marginVertical: 0.05*height,
    },
    rewardText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 0.025*height,
        textAlign: "center",
        textAlignVertical: "bottom",
        
    },

    coinImage: {
        width: 0.06*width,
        height: 0.06*width,
        alignSelf: "center",
        marginHorizontal: 0.04*width
    },
    coinSection: {
        flexDirection: "row",
        justifyContent: "center",
       
    },
    shareBtn: {
        paddingHorizontal: 0.15*width,
        paddingVertical: 0.01*height,
        marginTop: 0.03*height,
        borderRadius: 5,
        backgroundColor: "#954CF1"
    },
    shareText: {
        fontSize: 0.02*height,
        fontFamily: 'Poppins_700Bold',
        color: "white"
    }
})
