import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Welcome() {
  return (
    <View style = {styles.welcomePage}>
        <View style = {styles.logoDesc}>
          <Image
             source={require('../assets/Icons/logo_white.png')}
             style = {styles.logoImg}
          />
          <Text style = {styles.logoTitle}>QuizWorld</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    welcomePage: {
      backgroundColor: "#FF2F74",
      minHeight: height,
      justifyContent: "center",
      alignItems: "center"
    },
    logoDesc: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
      width: 0.8*width
    },
    logoImg: {
      width: 0.24*width,
      height: 0.24*width
    },
    logoTitle: {
      fontSize: 42,
      fontFamily: "Signika_700Bold",
      color: "white"
    }
})

