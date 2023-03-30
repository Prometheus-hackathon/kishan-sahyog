import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import { BuyerScreenNavigator } from "./Components/Screens/Buyer-Specific/Navigator";



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buyer">
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Farmer"
          options={{
            headerTitle: "",
            headerBackground: () => (
              <View style={{ backgroundColor: "#C5F5D6", height: 100 }} />
            ),
          }}
          component={Main}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Buyer"
          component={BuyerScreenNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
