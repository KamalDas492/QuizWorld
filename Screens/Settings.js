import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import OptionCard from "../Components/OptionCard";
const { width, height } = Dimensions.get("window");
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket, faBell, faCircleQuestion, faEnvelope, faLanguage, faStar } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../services/auth";
import { useContext } from "react";
import { AuthContext } from "../services/context";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
    const navigation = useNavigation();
    const {setUser} = useContext(AuthContext);
    const handleLogout = async () => {
        try {
            await logout();
            //setUser(null);
            navigation.navigate("Login");
            
        } catch(err) {
            console.log(err);
        }
    }

    const optionList = [
        {key: 0, name:"Change language", icon: faLanguage},
        {key: 1, name:"Notification settings", icon: faBell},
        {key: 2, name:"Help", icon: faCircleQuestion},
        {key: 3, name:"Rate this app", icon: faStar},
        {key: 4, name:"Contact us", icon: faEnvelope},
        {key: 5, name:"Log out", icon: faArrowRightFromBracket, onClick: handleLogout}
    ]
    
    const Item = ({ item }) => (
        <Pressable onPress = {item.onClick}>
        <OptionCard key={item.key} name = {item.name} src={item.icon} /> 
        </Pressable>   
      );
    return (
        <View>
            <View style = {styles.profileSettingArea}>
                <Image 
                    source={require("../assets/Icons/man.png")}
                    style = {styles.SettingsProfile}
                />
                <Text style = {styles.updateText}>Update Profile</Text>
                
            </View>
            <View style = {styles.settingsOption}>
            
            <FlatList 
                data = {optionList}
                renderItem={Item}
                keyExtractor={(item)=> item.key}
                numColumns={1}
                scrollEnabled = {false}
                ItemSeparatorComponent = {<View style = {{height: 0.04*height}} />}
                style={styles.list}
            />
            <Text style = {styles.copyright}>Copyright @2024</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSettingArea: {
        height: 0.25*height,
        justifyContent: "center",
        alignItems: "center"
    },
    SettingsProfile: {
        width: 0.25*width,
        height: 0.25*width
    },
    updateText: {
        fontSize: 15,
        marginTop:0.01*height,
        fontFamily: 'Poppins_500Medium',
        color: "#2727BC"
    },
    settingsOption: {
        backgroundColor: "white",
        paddingTop: 0.05*height,
        height: 0.75*height,
        alignItems:"center"
    },
    list: {
        maxHeight: 0.5*height
    },
    copyright: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        color: "#686868",
        marginTop: 0.05*height
    }
})