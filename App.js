
import { StyleSheet, Text, View, StatusBar} from 'react-native';
    Poppins_700Bold
    Poppins_700Bold
    import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import Login from './Screens/Login';
import QuizStart from './Screens/QuizStart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from './Screens/HomeStackScreen';


const firebaseConfig = {
  apiKey: "AIzaSyCVpZ-gNRSlCk_MWtwZJTJvCuF8N2D-vsA",
  authDomain: "quiz-app-9fc72.firebaseapp.com",
  projectId: "quiz-app-9fc72",
  storageBucket: "quiz-app-9fc72.appspot.com",
  messagingSenderId: "140614847703",
  appId: "1:140614847703:web:4014ab525e235bd113b492",
  measurementId: "G-1S5FJCT5R9"
};

const HomeStack = createNativeStackNavigator();

export default function App() {

  
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
 

  return (
    
      
      <NavigationContainer style = {styles.container}>
           <HomeStack.Navigator>
            <HomeStack.Screen name="HomeStack" component={HomeStackScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="QuizStart" component={QuizStart} options={{headerShown: false}}/>
          </HomeStack.Navigator>
            <StatusBar />
        </NavigationContainer>
      
    
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
