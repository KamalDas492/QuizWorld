import { ActivityIndicator, Dimensions, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { signup } from "../services/auth";
import { AuthContext, AuthProvider } from "../services/context";
const { width, height } = Dimensions.get("window");
const aspectRatio = 500/725;
import { useNavigation } from "@react-navigation/native";

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVisible, setPasswordVisibility] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    //const {userCtx, setUserCtx} = useContext(AuthContext);

    const handleFormSubmit = async () => {
        
        try {
            setLoading(true);
            const user = await signup(email, password);
            //setUserCtx(userCtx);
            setEmail("");
            setPassword("");
            //console.log(user);
            navigation.navigate("HomeStackScreen");
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    
    return (
        <View style = {styles.registerPage}>

            <Image 
                source={require("../assets/Icons/login-vector.jpg")}
                style = {styles.registerVector}
            />
            <View style = {styles.logoContainer}>
                <Image 
                    source = {require("../assets/Icons/logo_blue.png")}
                    style = {styles.logoImg}
                />
                <Text style = {styles.registerLogo}>QuizWorld</Text>
            </View>
            <View>
                <TextInput 
                    style = {styles.registerInputs}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor={"rgba(83, 88, 218, 0.4)"}
                />
                <View style = {styles.passwordContainer}>
                    <TextInput 
                        style = {styles.registerInputs}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry = {!passwordVisible}
                        placeholderTextColor={"rgba(83, 88, 218, 0.4)"}
                    />
                    <Pressable style = {styles.eyeIconContainer} onPress={() => {setPasswordVisibility(!passwordVisible)}}>
                        { !passwordVisible && <FontAwesomeIcon icon={faEyeSlash} style = {styles.eyeIcon} size={18}/>}
                        { passwordVisible && <FontAwesomeIcon icon={faEye} style = {styles.eyeIcon} size={18}/>}
                    </Pressable>
                    
                </View>
                <Pressable style = {styles.registerButton} onPress={handleFormSubmit}>
                    <Text style = {styles.registerButtonText}>Register</Text>
                </Pressable>
            </View>
            <View>
                <Text style = {{fontFamily: 'Poppins_400Regular', marginVertical: 2, alignSelf: "center"}}>or</Text>
                <View style = {styles.socialRegisterContainer}>
                    <Pressable>
                        <Image 
                            source={require("../assets/Icons/facebook.png")}
                            style = {styles.registerSocialIcons}
                        />
                    </Pressable>
                    <Pressable>
                        <Image 
                            source={require("../assets/Icons/google.png")}
                            style = {styles.registerSocialIcons}
                        />
                    </Pressable>
                    <Pressable>
                        <Image 
                            source={require("../assets/Icons/twitter.png")}
                            style = {styles.registerSocialIcons}
                        />
                    </Pressable>
                </View>
                <View style = {styles.registerOptionalContainer}>
                   <Text style = {styles.registerOptionalContainerText}>Already have an account? </Text> 
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style = {styles.registerOptional}>Log in</Text>
                    </Pressable>
                    
                </View>
            </View>
            {loading && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {}} 
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ActivityIndicator size="large" color="#FF2F74" style={styles.modalLoading} />
              <Text style={styles.modalText}>Please wait...</Text>
            </View>
          </View>
        </Modal>
      )}
        </View>
    )
}

const styles = StyleSheet.create({
    registerVector: {
        width: 0.8*width,
        height: 0.8*width*aspectRatio,
        marginBottom: 30
    },
    registerLogo: {
        fontFamily: 'Signika_700Bold',
        fontSize: 40,
        alignSelf: "center",
        color: "#5358DA",
    },
    registerPage: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: "white"
    },
    registerInputs: {
        height: 0.07* height,
        width: 0.8*width,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 12,
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        backgroundColor: "rgba(83, 88, 218, 0.1)",
        borderColor: "#5358DA",
        color: "#5358DA",
        marginHorizontal: 0
    }, 
    eyeIcon: {
        color: "#5358DA",
    },
    eyeIconContainer: {
        position: "absolute",
        right: 0.05*width,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8
    },
    registerButton: {
        height: 0.07* height,
        width: 0.8*width,
        backgroundColor: "#5358DA",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 5,
        borderRadius: 5,
    }, 
    registerButtonText: {
        color: "#ffffff", 
        fontSize: 16, 
        fontFamily: 'Poppins_500Medium',
    },
    socialRegisterContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 0.4*width,
        marginVertical: 5,
        alignSelf: "center"
    },
    registerSocialIcons: {
        width: 0.04*height,
        height: 0.04*height
    }, 
    registerOptionalContainer: {
        alignSelf: "center",
        marginTop: 0.1*height,
        flexDirection: "row"
    },
    registerOptionalContainerText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13
    },
    registerOptional: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13, 
        color: "#5358DA"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        flexDirection: "row",
        backgroundColor: 'white',
        paddingVertical: 30,
        borderRadius: 5,
        alignItems: 'center',
        width: 0.6*width,
        
      },
      modalText: {
        fontSize: 16,
        flex: 8,
        alignItems: "center",
      },
      modalLoading: {
        flex: 4,
        alignItems: "center",
      },
      logoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 0.08*height
      },
      logoImg: {
        height: 0.15*width,
        width: 0.15*width
      },
})
