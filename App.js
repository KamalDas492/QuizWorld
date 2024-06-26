
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
import SubTopics from './Screens/SubTopics';
import Quiz from './Screens/Quiz';
import Result from './Screens/Result';


const Stack = createNativeStackNavigator();


const AppContent = () => {
  const { user, _ } = useContext(AuthContext);

  return (
    
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SubTopics" component={SubTopics} options={{ headerShown: false }} />
            <Stack.Screen name="QuizStart" component={QuizStart} options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
            </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </>
        )}
      </Stack.Navigator>
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
