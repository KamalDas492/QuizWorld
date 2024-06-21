import { ActivityIndicator, Dimensions, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { login } from "../services/auth";
import {AuthContext, AuthProvider} from "../services/context"
const { width, height } = Dimensions.get("window");
const aspectRatio = 500/725;

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVisible, setPasswordVisibility] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    //const {userCtx, setUserCtx} = useContext(AuthContext);

    const handleFormSubmit = async () => {
        try {
            setLoading(true);
            const user = await login(email, password);
            //setUserCtx(user);
            setEmail("");
            setPassword("");
            console.log(user);
            navigation.navigate("HomeStack");
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    
    return (
        <View style = {styles.loginPage}>
            <Image 
                source={require("../assets/Icons/login-vector.jpg")}
                style = {styles.loginVector}
            />
            <View style = {styles.logoContainer}>
                <Image 
                    source = {require("../assets/Icons/logo_pink.png")}
                    style = {styles.logoImg}
                />
                <Text style = {styles.loginLogo}>QuizWorld</Text>
            </View>
            
            <View>
                <TextInput 
                    style = {styles.loginInputs}
                    placeholder="Username"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor={"rgba(255, 47, 116, 0.4)"}
                />
                <View style = {styles.passwordContainer}>
                    <TextInput 
                        style = {styles.loginInputs}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry = {!passwordVisible}
                        placeholderTextColor={"rgba(255, 47, 116, 0.4)"}
                    />
                    <Pressable style = {styles.eyeIconContainer} onPress={() => {setPasswordVisibility(!passwordVisible)}}>
                        { !passwordVisible && <FontAwesomeIcon icon={faEyeSlash} style = {styles.eyeIcon} size={18}/>}
                        { passwordVisible && <FontAwesomeIcon icon={faEye} style = {styles.eyeIcon} size={18}/>}
                    </Pressable>
                    
                </View>
                <Pressable style = {styles.loginButton} onPress={handleFormSubmit}>
                    <Text style = {styles.loginButtonText}>Log in</Text>
                </Pressable>
            </View>
            <View>
                <Text style = {{fontFamily: 'Poppins_400Regular', marginVertical: 2, alignSelf: "center"}}>or</Text>
                <View style = {styles.socialLoginContainer}>
                    <Pressable>
                        <Image 
                            source={require("../assets/Icons/facebook.png")}
                            style = {styles.loginSocialIcons}
                        />
                    </Pressable>
                    <Pressable>
                        <Image 
                            source={require("../assets/Icons/google.png")}
                            style = {styles.loginSocialIcons}
                        />
                    </Pressable>
                    <Pressable>
                        <Image 
                            source={require("../assets/Icons/twitter.png")}
                            style = {styles.loginSocialIcons}
                        />
                    </Pressable>
                </View>
                <View style = {styles.loginOptionalContainer}>
                   <Text style = {styles.loginOptionalContainerText}>Don't have an account? </Text> 
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style = {styles.loginOptional}>Register</Text>
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
    loginVector: {
        width: 0.8*width,
        height: 0.8*width*aspectRatio,
        marginBottom: 30
    },
    loginLogo: {
        fontFamily: 'Signika_700Bold',
        fontSize: 40,
        alignSelf: "center",
        color: "#ff2f74",
        
    },
    loginPage: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: "white"
    },
    loginInputs: {
        height: 0.07* height,
        width: 0.8*width,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 12,
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        backgroundColor: "rgba(255, 47, 116, 0.1)",
        borderColor: "#FD4180",
        color: "#FF2F74",
        marginHorizontal: 0
    }, 
    eyeIcon: {
        color: "#FF2F74",
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
    loginButton: {
        height: 0.07* height,
        width: 0.8*width,
        backgroundColor: "#FF2F74",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 5,
        borderRadius: 5,
    }, 
    loginButtonText: {
        color: "#ffffff", 
        fontSize: 16, 
        fontFamily: 'Poppins_500Medium',
    },
    socialLoginContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 0.4*width,
        marginVertical: 5,
        alignSelf: "center"
    },
    loginSocialIcons: {
        width: 0.04*height,
        height: 0.04*height
    }, 
    loginOptionalContainer: {
        alignSelf: "center",
        marginTop: 0.1*height,
        flexDirection: "row"
    },
    loginOptionalContainerText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13
    },
    loginOptional: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13, 
        color: "#FF2F74"
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
      logoImg: {
        height: 0.15*width,
        width: 0.15*width
      },
      logoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 0.08*height
      }
})
