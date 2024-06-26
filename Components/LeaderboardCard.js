import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function LeaderboardCard(props) {
    //console.log(props.self);
    return (
        <View style = {styles.entry}>
            <View style = {[styles.container, {backgroundColor: props.self ? "blue" : "white"}]}>
            <View style = {styles.serialDiv}>
                <Text style = {[styles.serailText, {color: props.self ? "white": "#5358DA"}]}>{props.serialNo}</Text>
            </View>
            <View style = {styles.profileImgContainer}>
            <Image 
                source={require("../assets/Icons/man.png")}
                style = {styles.leaderboardProfileImg}
            />
            </View>
            <View style = {styles.usernameContainer}>
                <Text style = {[styles.usernameText, {color: props.self ? "white": "#5358DA"}]}>{props.username}</Text>
            </View>
            <View style = {styles.scoreContainer}>
                <Text style = {[styles.scoreText,{color: props.self ? "white": "#5358DA"}]}>{props.score}</Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 0.9*width,
        justifyContent: "space-around",
        borderWidth: 1,
        marginBottom: 0.005*height,
        borderRadius: 3,
        paddingVertical: 0.01*height,
        borderColor: "#5358DA",
        
    },
    entry: {
        width: width,
        alignItems: "center"
    },
    serialDiv: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImgContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    leaderboardProfileImg: {
        width: 0.11*width,
        height: 0.11*width
    },
    usernameContainer: {
        flex: 5,
        justifyContent: "center",
        paddingLeft: 0.05*width
    },
    scoreContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    serailText: {
        fontFamily: 'Poppins_600SemiBold',
       
    
    },
    usernameText: {
        fontFamily: 'Poppins_600SemiBold',
        color: "#5358DA",
    },
    scoreText: {
        fontFamily: 'Poppins_600SemiBold',
        color: "#5358DA",
    }
})