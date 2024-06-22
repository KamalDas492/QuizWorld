import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");


export default function SubTopics({route, navigation}) {
    const {topic, subtopicList, color, fillColor} = route.params;
    //console.log(subtopicList);
    const Item = ({ item }) => (
        <Pressable onPress={() => {navigation.navigate("QuizStart", {subtopic: item.subtopic})}}>
            <View style = {[styles.subtopicCard]}>
                <Text style = {[styles.subtopicText]}>{item.subtopic}</Text>
            </View>
        </Pressable> 
    )
    
  
    return (
        <View style = {styles.subtopicScreen}>
            <Text style = {[styles.subtopicName]}>{topic}</Text>
            <Text style = {styles.subtopicHeading}>Select a Quiz</Text>
            <FlatList 
                data = {subtopicList}
                renderItem={Item}
                keyExtractor={(item)=> item.key}
                numColumns={1}
                ItemSeparatorComponent = {<View style = {{height: 0.03*(height)}} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    subtopicCard: {
        width: 0.8*width,
        paddingVertical: 0.03*height,
        
        borderRadius: 10,
        backgroundColor: "#FF2F74"
    },
    subtopicText: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: "center",
        color: "#ffffff"
    },
    subtopicScreen: {
        width: width,
        height: height,
        paddingTop: 0.05*height,
        alignItems: "center",
    },
    subtopicHeading: {
        fontSize: 20,
        fontFamily: 'Poppins_500Medium', 
        marginBottom: 0.03*height,

    },
    subtopicName: {
        fontSize: 0.11*width,
        fontFamily: 'Poppins_700Bold', 
        marginBottom: 0.1*height,
        color: "#5358DA",
        textAlign: "center"
    }
})