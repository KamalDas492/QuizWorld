
import { createContext, useContext, useEffect, useState } from "react";
import {auth} from "./config"
import { View } from "react-native";
import Welcome from "../Screens/Welcome";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
        return unsubscribe;
    }, []);

    if(initializing) {
        return (
            <View><Welcome /></View>
        )
    }

    return (
        <AuthContext.Provider value={{ user , setUser}}>
          {children}
        </AuthContext.Provider>
      );
}

export { AuthContext, AuthProvider };