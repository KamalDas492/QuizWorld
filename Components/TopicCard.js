import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
const { width, height } = Dimensions.get("window");



export default function TopicCard(props) {
    
    return (
        <View
        style = {[styles.card, {backgroundColor: props.fill, borderColor: props.stroke, borderWidth: 2}]} 
        >
            <Image source={props.src} style = {styles.image}/>
            <View style = {styles.topicContainer}>
                <Text style = {[styles.cardTopic, {color: props.stroke}]}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      height: 0.06*height,
      width: 0.06*height,
      
    },
    card : {
        backgroundColor: "red",
        width: 0.44*width,
        height: 0.14*height,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft:8,
        borderRadius: 8,
        
    }, 
    cardTopic: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: "center"
    }, 
    topicContainer: {
        justifyContent: "center",
        flex: 1
    }
  });
