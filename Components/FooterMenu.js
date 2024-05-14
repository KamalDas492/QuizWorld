import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faRankingStar, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const { width, height } = Dimensions.get("window");

export default function FooterMenu() {
    return (
        <View style = {{backgroundColor: "#f8f8f8"}}>
        <View style = {styles.footerMenuContainer}>
            <Pressable><FontAwesomeIcon style = {styles.footerMenuIcon} icon={faHouse} size = {0.032*height}/></Pressable>
            <Pressable><FontAwesomeIcon style = {styles.footerMenuIcon} icon={faRankingStar} size = {0.032*height}/></Pressable>
            <Pressable><FontAwesomeIcon style = {styles.footerMenuIcon} icon={faCircleUser} size = {0.032*height}/></Pressable>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerMenuContainer: {
        height: 0.058*height,
        width: 0.8*width,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerMenuIcon: {
        color: "#B0B0B0"
    }
})