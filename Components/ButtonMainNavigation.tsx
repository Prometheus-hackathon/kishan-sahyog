import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";
export default function BottonMainNavigation(){

    return <View style={{
        position: "absolute",
        bottom: 0,
        // backgroundColor:"red",
        width: "100%",
        height: verticalScale(90),
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
    
        <View style={{
          width: "30%",
          height: "100%",
          backgroundColor: "#E3FFED",
          borderTopRightRadius: verticalScale(50),
          borderWidth: verticalScale(2),
          borderColor:"#1A6144",
          borderLeftWidth: 0, 
           justifyContent:'center',
          alignItems:'center',
          paddingLeft: scale(5),
          paddingRight: scale(5),
        }}>
           <Text style={{
            textAlign:'center',
            fontFamily: "Lexend_500Medium",
            color:"#1A6144"
          }}>
         MY CROP
          </Text>
        </View>
    
        <View style={{
          width: "30%",
          height: "100%",
          backgroundColor: "#E3FFED",
          borderTopLeftRadius: verticalScale(50),
          borderWidth: verticalScale(2),
          borderColor:"#1A6144",
          borderRightWidth: 0,
          justifyContent:'center',
          alignItems:'center',
          paddingLeft: scale(5),
          paddingRight: scale(5),
        }}>
           <Text style={{
              textAlign:'center', 
            fontFamily: "Lexend_500Medium",
            color:"#1A6144"
          }}>
         CONTACT WITH BUYER
          </Text>
        </View>
    
    
    
      </View>
}