
import { StyleSheet, Text, View, StatusBar} from 'react-native';
    Poppins_700Bold
    Poppins_700Bold
    import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import Login from './Screens/Login';
import QuizStart from './Screens/QuizStart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from './Screens/HomeStackScreen';
import Register from './Screens/Register';



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
           <HomeStack.Screen name="Register" component={Register} options={{headerShown: false}}/>
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
