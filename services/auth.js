import {auth} from "./config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
              Alert.alert("Error", "Something went wrong"); 
              break;
          }
        throw error; 
      }
    
}

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user.uid);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Sign in error:", errorMessage);
    switch (errorCode) {
      case 'auth/user-not-found':
        Alert.alert("User Not Found", "No user found with this email address");
        break;
      case 'auth/wrong-password':
        Alert.alert("Wrong Password", "The password is incorrect");
        break;
      case 'auth/invalid-email':
        Alert.alert("Invalid Email", "The email address is invalid");
        break;
      case 'auth/invalid-credential':
        Alert.alert("Wrong credentials", "Please use correct credentials");
        break;
      default:
        Alert.alert("Error", "Something went wrong"); 
        break;
    }
    throw error; 
  }
};

const logout = async () => {
  try {
      await signOut(auth);
      console.log("User signed out");
  } catch (error) {
      console.error("Sign out error:", error.message);
      Alert.alert("Error", "Failed to sign out");
  }
}

export { signup, login, logout };