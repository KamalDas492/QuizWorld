import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialIcons } from '@expo/vector-icons';
import Home from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from './Settings';
import Leaderboard from './Leaderboard';





const Tab = createBottomTabNavigator();

export default function HomeStackScreen() {
  return (

    <Tab.Navigator 
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if(route.name === "Home") {
          iconName = focused ? "home-sharp" : "home-outline";
          return <Ionicons name={iconName} color = {color} size = {22}/>;
        } else if(route.name === "Leaderboard") {
          return <MaterialIcons name="leaderboard"color = {color} size = {22}/>
        } else {
          iconName = focused ? "settings" : "settings-outline";
          return <Ionicons name={iconName} color = {color} size = {22}/>;
        }
      },
      headerShown: false,
      tabBarActiveTintColor: "#5358DA",
      tabBarLabelStyle: {
        fontFamily: 'Poppins_500Medium'
      }
    })}>
      <Tab.Screen name = "Home" component={Home}/>
      <Tab.Screen name = "Leaderboard" component={Leaderboard} />
      <Tab.Screen name = "Settings" component={Settings} />
  </Tab.Navigator>
    
  );
}