import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const { width, height } = Dimensions.get("window");

export default function OptionCard(props) {
  return (
    <View style = {styles.option}>
        <FontAwesomeIcon icon = {props.src} size = {0.032*height} style={styles.optionIcon}/>
        <Text style = {styles.optionName}>{props.name}</Text>
    <FontAwesomeIcon icon={faAngleRight} size = {0.025*height} style = {styles.optionArrow}/>
    </View>
  )
}

const styles = StyleSheet.create({
    option: {
        flexDirection: "row",
        alignItems: "center",
        width: 0.8*width,
        backgroundColor:"white"
    },
    optionName: {
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
        flex: 8,
        paddingLeft: 0.03*width
    },
    optionIcon: {
        height: 0.05*height,
        flex: 2
    },
    optionArrow: {
        flex: 2
    }
})