import { Image, ScrollView, StyleSheet, Text, View, Dimensions, FlatList, Pressable } from "react-native";
import TopicCard from "../Components/TopicCard";
const { width, height } = Dimensions.get("window");
import {AuthContext} from "../services/context"
import { useContext } from "react";
import topicsList from "../admin/Topics";


export default function Home({navigation}) {
    const {user}= useContext(AuthContext);
    var username = "Guest";
    if(user) {
        username = (user.email).split('@')[0];
    }
    

    const Item = ({ item }) => (
        <Pressable onPress={() => {navigation.navigate("SubTopics", {topic:item.name,subtopicList: item.subtopics})}}>
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
                        <Text style = {styles.username}> Hello {username},</Text>
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

