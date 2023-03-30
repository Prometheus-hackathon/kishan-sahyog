import { LexendDeca_400Regular, LexendDeca_600SemiBold } from "@expo-google-fonts/lexend-deca";
import { useFonts } from "expo-font";
import { ImageSourcePropType, TouchableOpacity, View,Image,Text,Vibration } from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';
export const ScreenElements = ({
    text,
    imageUri,
  }: {
    text: string;
    imageUri: ImageSourcePropType;
  }) => {
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
        navigation.navigate("Crops-Details")
        Vibration.vibrate(100)
      }}
        style={{
          backgroundColor: "#BCECD9",
          paddingTop: moderateVerticalScale(4),
          paddingLeft: moderateVerticalScale(4),
          paddingRight: moderateVerticalScale(4),
          width: "40%",
          height: "30%",
          borderRadius: scale(10),
          borderWidth: scale(2),
          borderColor: "black",
          margin: "2%",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: "80%",
            borderRadius: scale(10),
          }}
        >
          <Image
            source={imageUri}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: scale(10),
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "LexendDeca_600SemiBold",
            textAlign: "center",
            marginTop: moderateVerticalScale(2),
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  };