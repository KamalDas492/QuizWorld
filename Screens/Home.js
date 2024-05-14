import { Image, ScrollView, StyleSheet, Text, View, Dimensions, FlatList, Pressable } from "react-native";
import TopicCard from "../Components/TopicCard";
const { width, height } = Dimensions.get("window");





export default function Home({navigation}) {

    const topicsList = [
        {key: 0, name: "History", src: require("../assets/Icons/castle.png"), fill: "rgba(255, 252, 166, 0.42)", stroke: "#FFC700"},
        {key: 1, name: "Geography", src: require("../assets/Icons/globe.png"), fill: "rgba(203, 217, 253, 0.4)", stroke: "#3F6CDF"},
        {key: 2, name: "Science", src: require("../assets/Icons/atom.png"), fill: "rgba(39, 39, 188, 0.15)", stroke: "#2727BC"},
        {key: 3, name: "Math", src: require("../assets/Icons/function.png"), fill: "rgba(79, 200, 154, 0.24)", stroke: "#4FC89A"},
        {key: 4, name: "General Knowledge", src: require("../assets/Icons/book.png"), fill: "rgba(254, 97, 8, 0.19)", stroke: "#EF990C"},
        {key: 5, name: "Technology", src: require("../assets/Icons/artificial-intelligence.png"), fill: "rgba(113, 90, 161, 0.28)", stroke: "#5E2ACA"},
        {key: 6, name: "Movies", src: require("../assets/Icons/clapperboard.png"), fill: "rgba(250, 45, 174, 0.11)", stroke: "#FA2DAE"},
        {key: 7, name: "Books", src: require("../assets/Icons/literature.png"), fill: "rgba(0, 233, 226, 0.1)", stroke: "#05DBD4"},
        {key: 8, name: "Sports", src: require("../assets/Icons/football.png"), fill: "rgba(113, 90, 161, 0.28)", stroke: "#5E2ACA"},
        {key: 9, name: "Food", src: require("../assets/Icons/restaurant.png"), fill: "rgba(254, 31, 30, 0.22)", stroke: "#FA1F1E"},
        
    ]

    const Item = ({ item }) => (
        <Pressable onPress={() => navigation.navigate("QuizStart", {topic: item.name})}>
        <TopicCard key={item.key} name = {item.name} src={item.src} fill = {item.fill} stroke = {item.stroke} /> 
        </Pressable>   
      );

    return (
        <View>
        
        <ScrollView>
            <View style = {styles.userinfo}>
                <View style = {styles.user}>
                    <Image 
                        source={require("../assets/Icons/man.png")}
                        style = {styles.userimg}
                    />
                    <View>
                        <Text style = {styles.username}> Hello Kamal,</Text>
                        <Text style = {{fontFamily: 'Poppins_500Medium'}}> Welcome to QuizWorld</Text>
                    </View>
                </View>
                <View style = {styles.coins}>
                    
                        <Image
                            source = {require("../assets/Icons/dollar.png")}
                            style = {styles.coinIcon}
                        />
                        <Text style = {styles.coinAmount}>200</Text>
                    
                </View>
            </View>
            <View style = {styles.topics}>
                <Text style = {styles.topicHeading}> Topics </Text>
                <View style = {styles.topicCardContainer}>
                    <FlatList 
                        data = {topicsList}
                        renderItem={Item}
                        keyExtractor={(item)=> item.key}
                        numColumns={2}
                        scrollEnabled = {false}
                        columnWrapperStyle = {{flex: 1, justifyContent: "space-evenly"}}
                        ItemSeparatorComponent = {<View style = {{height: 12}} />}
                    />
                </View>
            </View>
            
        </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    userinfo: {
        flexDirection: "row",
        height: 0.2* height,
        width: width,
        justifyContent: "center",
        backgroundColor: "#F8F8F8"
    },
    userimg : {
        width: 0.15*width,
        height: 0.15*width,
        marginRight: 8
    },
    topics: {
       
    },
    topicCardContainer: {
        paddingHorizontal: 5,
        marginBottom: 20,
        marginTop: 20
    },
    user: {
        flexDirection: "row",
        flex: 7,
        justifyContent: "center",
        alignItems: "center",
        
    }, 
    coins: {
        flex: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    coinIcon: {
        width: 0.06*width,
        height: 0.06*width,
        marginRight:5
    },
    username: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: -10,
        color: "#FE075E"
    }, 
    coinAmount: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
    }, 
    topicHeading: {
        fontSize: 25,
        fontFamily: 'Poppins_700Bold', 
        marginTop: 15,
        marginLeft: 15,
        
    }
})

