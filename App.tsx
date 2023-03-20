import { View, Text, StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";
import WeatherWidget from "./Components/WeatherWidget";
function App() {
  let [fontsLoaded] = useFonts({
    Lexend_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: verticalScale(80),
        }}
      >

        <WeatherWidget/>

        
        <View style={{
          backgroundColor:"grey"
        }}>
          
            <View style={{
              flexDirection:"row",
            }}>
              <View style={{
                height:verticalScale(100),
                width: verticalScale(100),
                backgroundColor:"white",
                borderWidth:verticalScale(2),
                borderColor:"black",
              }}>

              </View>

              <View style={{
                height:verticalScale(100),
                width: verticalScale(100),
                backgroundColor:"white",
                borderWidth:verticalScale(2),
                borderColor:"red",
              }}>

              </View>


              
            </View>




            <View style={{
              flexDirection:"row",
            }}>
              <View style={{
                height:verticalScale(100),
                width: verticalScale(100),
                backgroundColor:"white",
                borderWidth:verticalScale(2),
                borderColor:"brown",
              }}>

              </View>

              <View style={{
                height:verticalScale(100),
                width: verticalScale(100),
                backgroundColor:"white",
                borderWidth:verticalScale(2),
                borderColor:"yellow",
              }}>

              </View>


              
            </View>

        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C5F5D6",
    flex: 1,
  },
});

export default App;
