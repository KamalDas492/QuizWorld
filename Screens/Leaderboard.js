import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {db} from "./../services/config"
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";
import LoadIndicator from "./../Components/loadIndicator"
import LeaderboardCard from "../Components/LeaderboardCard";
import { AuthContext } from "../services/context";
import { fetchUserDetails } from "../services/handleUserDetails";
const { width, height } = Dimensions.get("window");


export default function Leaderboard() {
    const [userList, setUserList] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const {user} = useContext(AuthContext);
    

    useEffect( () => {
      
          const fetchScoreData = async () => {
            try {
              const q = query(collection(db, 'users'), orderBy('score', 'desc'));
              const querySnapshot = await getDocs(q);
              const userAndScores = [];
              querySnapshot.forEach((doc) => {
                userAndScores.push({
                    username: doc.data().username,
                    score: doc.data().score,
                    userId: doc.id
                })
              });
              setUserList(userAndScores);
            } catch (err) {
              console.error('Error fetching score data: ', err);
            } finally {
              setIsLoading(false);
            }
          };
         
    
          fetchScoreData();
    
          return () => {
            // Cleanup function if needed
          };
        
        }, [user])

    if(IsLoading) {
        return (
            <LoadIndicator/>
        )
    } else {
        return (
            <View style = {styles.leaderboardPage}>
            <Text style = {styles.leaderboardHeading}>Leaderboard</Text>
            <Image 
                source={require("../assets/Icons/Leaderboard.png")}
                style = {styles.leaderboardImg}
            />
            <ScrollView>
            {
                userList.map((userScore, index) => (
                 
                    <LeaderboardCard 
                      key = {index}
                      serialNo = {index + 1}
                      username = {userScore.username}
                      score = {userScore.score}
                      self = {userScore.userId == user.uid}
                    />
                   
                ))
            }
            </ScrollView>
            </View>
            
            
        )
    }

    
}

const styles = StyleSheet.create({
  leaderboardHeading: {
    fontSize: 0.03*height,
    fontFamily: 'Poppins_600SemiBold',
    color: "#FF2F74",
    marginVertical: 0.04*height
  },
  leaderboardImg: {
    height: 0.58*width,
    width: 0.8*width,
    marginBottom: 0.05*height
  },
  leaderboardPage: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
})