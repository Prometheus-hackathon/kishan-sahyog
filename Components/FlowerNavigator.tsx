
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";
import MicFill from "../assets/custom/mic_fill.svg";
import PlatSVG from '../assets/custom/PlantsSVG.svg'
import VegetableSVG from '../assets/custom/VegetableSVG.svg'
import BuildingSVG from '../assets/custom/BuildingSVG.svg'
import BookSVG from '../assets/custom/BookSVG.svg'


export default function FlowerNavigator() {
    let [fontsLoaded] = useFonts({
      Lexend_500Medium,
    })

    if (!fontsLoaded) {
        return null;
      }
    return <View style={{
      justifyContent: "center",
      alignItems: "center",
    }}>


        
  
      
  
      <View
        style={{
            marginTop: verticalScale(20),
          height: verticalScale(223),
          width: verticalScale(223),
          // backgroundColor: "grey",
          gap: verticalScale(10),
          position: "relative"
        }}
      >
        {/* stroke */}
        <View style={{
          position: "absolute",
          zIndex: 8,
          backgroundColor: "#1A6144",
          height: '250%',
          width: scale(13),
          top: '50%',
          left: '50%',
        }}>
  
        </View>
        <View style={{
          position: "absolute",
          zIndex: 10,
          height: '100%',
          width: '100%',
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          {/* center btn */}
          <View style={{
            backgroundColor: "#E3FFED",
            borderColor:"#1A6144",
            marginLeft: scale(10),
            borderWidth: verticalScale(2),
            height: verticalScale(60),
            width: verticalScale(60),
            borderRadius: verticalScale(50),
            zIndex: 10,
            justifyContent:'center',
            alignItems:'center'
          }}>
           
  <MicFill height={verticalScale(30)} width={verticalScale(30)} fill="#1A6144" />
          </View>
  
        </View>
  
        <View
          style={{
            flexDirection: "row",
            height: "50%",
            gap: verticalScale(10),
          }}
        >
          <View
            style={{
              width: "50%",
              backgroundColor: "white",
              borderWidth: verticalScale(2),
              borderColor: "#1A6144",
              borderTopRightRadius: verticalScale(50),
              borderBottomLeftRadius: verticalScale(50),
              justifyContent:'center',
              alignItems:"center",
            }}
          >
            <PlatSVG height={verticalScale(47)} width={verticalScale(47)} fill="#1A6144" />
            <Text style={{
              textAlign:'center',
              fontFamily: "Lexend_500Medium",
              color:"#1A6144",
            }}>
            DISEASE DETECTION
            </Text>
          </View>
  
          <View
            style={{
              width: "50%",
              backgroundColor: "white",
              borderWidth: verticalScale(2),
              borderColor: "#1A6144",
              borderTopLeftRadius: verticalScale(50),
              borderBottomRightRadius: verticalScale(50),
              justifyContent:'center',
              alignItems:"center"
            }}
          >
            <BuildingSVG height={verticalScale(47)} width={verticalScale(47)} fill="#1A6144" />
            <Text style={{
              textAlign:'center',
              fontFamily: "Lexend_500Medium",
              color:"#1A6144"
            }}>
            SCHEMES FOR YOU
            </Text>
          </View>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            height: "50%",
            gap: verticalScale(10),
          }}
        >
          <View
            style={{
              width: "50%",
              backgroundColor: "white",
              borderWidth: verticalScale(2),
              borderColor: "#1A6144",
              borderTopLeftRadius: verticalScale(50),
              borderBottomRightRadius: verticalScale(50),
              justifyContent:'center',
              alignItems:"center"
            }}
          >
    <VegetableSVG height={verticalScale(47)} width={verticalScale(47)} fill="#1A6144" />
    <Text style={{
              textAlign:'center',
              fontFamily: "Lexend_500Medium",
              color:"#1A6144"
            }}>
            MY FARM
            </Text>
  
          </View>
  
          <View
            style={{
              width: "50%",
              backgroundColor: "white",
              borderWidth: verticalScale(2),
              borderColor: "#1A6144",
              borderTopRightRadius: verticalScale(50),
              borderBottomLeftRadius: verticalScale(50),
              justifyContent:'center',
              alignItems:'center'
            }}
          >
   <BookSVG height={verticalScale(47)} width={verticalScale(47)} fill="#1A6144" />
   <Text style={{
              textAlign:'center',
              fontFamily: "Lexend_500Medium",
              color:"#1A6144"
            }}>
           FARMING KNOWLEDGE
            </Text>
  
          </View>
        </View>
      </View>
  
    </View>
  }