import { LexendDeca_400Regular, LexendDeca_600SemiBold } from "@expo-google-fonts/lexend-deca";
import { useFonts } from "expo-font";
import { ImageSourcePropType, TouchableOpacity, View,Image,Text,Vibration } from "react-native";
import { moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';
import PlusSVG from '../../assets/custom/plusCircle.svg'
export const ScreenElementsVAR2 = () => {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
      LexendDeca_400Regular,
      LexendDeca_600SemiBold,
    });
    if (!fontsLoaded) {
      return null;
    }
    return (
      <TouchableOpacity
      onPress={()=>{
        // @ts-ignore
        // navigation.navigate("Crops-Details")
        Vibration.vibrate(100)
      }}
        style={{
          backgroundColor: "#BCECD9",
          paddingTop: moderateVerticalScale(4),
          paddingLeft: moderateVerticalScale(4),
          paddingRight: moderateVerticalScale(4),
          width: "40%",
          height:verticalScale(200),
          borderRadius: scale(10),
          borderWidth: scale(2),
          borderColor: "black",
          margin: "2%",
        }}
      >
        <Text style={{
            fontFamily: "LexendDeca_600SemiBold",
            textAlign: "center",
        }}>
            WHEAT
        </Text>
        <View
          style={{
            backgroundColor: "#EBEBEB",
            height: "70%",
            borderRadius: scale(10),
            borderWidth:    scale(2),
          }}
        >
          
        </View>
        <View style={{
            marginTop:'auto',
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <View>

            <Text>
            Rs. 400/Kg
            </Text>
            <Text>
            Mr. Ram Kishan
            </Text>
            </View>
            <View>
                <PlusSVG fill="black" height={scale(20)} width={scale(20)}/>

            </View>
        </View>
      </TouchableOpacity>
    );
  };