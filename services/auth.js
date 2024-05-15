import {auth} from "./config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {Alert} from "react-native";

const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed up:", user.uid);
        return user; 
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign up error:", errorMessage);
        switch (errorCode) {
            case "auth/email-already-in-use":
              Alert.alert("Email not available", "The email address is already in use by another account.");
              break;
            case "auth/invalid-email":
              Alert.alert("Invalid Email", "The email address is invalid.");
              break;
            case "auth/weak-password":
              Alert.alert("Weak Password", "The password is too weak. Please choose a stronger password.");
              break;
            default:
              Alert.alert("Error", errorMessage); // Display the default error message
              break;
          }
        throw error; 
      }
    
}

export {signup};