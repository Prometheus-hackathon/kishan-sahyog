import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";
import WeatherWidget from "./Components/WeatherWidget";
import FlowerNavigator from "./Components/FlowerNavigator";
import BottonMainNavigation from "./Components/ButtonMainNavigation";
import { StatusBar } from "expo-status-bar";


function App() {
  let [fontsLoaded] = useFonts({
    Lexend_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

    <BottonMainNavigation/>
      <View
        style={{
          marginTop: verticalScale(60),
        }}
      >
        <WeatherWidget />
          <FlowerNavigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C5F5D6",
    flex: 1,
    position: "relative",
  },
});

export default App;
