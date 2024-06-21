
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import {Signika_600SemiBold, Signika_700Bold} from '@expo-google-fonts/signika' 
import Login from './Screens/Login';
import QuizStart from './Screens/QuizStart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from './Screens/HomeStackScreen';
import Register from './Screens/Register';
import Welcome from './Screens/Welcome';
import {AuthContext, AuthProvider} from "./services/context"
import { useContext } from 'react';

const HomeStack = createNativeStackNavigator();


const AppContent = () => {
  const { user, _ } = useContext(AuthContext);

  return (
    <NavigationContainer style = {styles.container}>
      <HomeStack.Navigator>
        {user ? (
          <>
            <HomeStack.Screen name="HomeStack" component={HomeStackScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="QuizStart" component={QuizStart} options={{ headerShown: false }} />
            </>
        ) : (
          <>
            <HomeStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <HomeStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </>
        )}
      </HomeStack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default function App() {

  
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Signika_600SemiBold,
    Signika_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  //const {user , setUser} = useContext(AuthContext);

  return (
    
    <AuthProvider>
        <AppContent />
    </AuthProvider>
    
   /* 
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} options={{headerShown: false}}/>
        <Stack.Screen name = "Start Quiz" component = {QuizStart} />
      </Stack.Navigator>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins_400Regular'
  },
  
});
