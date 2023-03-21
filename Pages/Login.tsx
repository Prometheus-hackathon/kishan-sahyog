import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../assets/custom/Logo.svg";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useFonts } from "expo-font";
import { LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca";
import FarmerSVG from "../assets/custom/farmer_icon.svg";
import BuyerSVG from "../assets/custom/buyer_icon.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
function HeadingText() {
  return (
    <View
      style={{
        marginTop: verticalScale(80),
        marginBottom: moderateScale(20),
      }}
    >
      <Text
        style={{
          fontFamily: "Inter-ExtraBoldItalic",
          fontSize: moderateScale(34),
          color: "#26C485",
          textAlign: "center",
        }}
      >
        KISAAN
      </Text>
    </View>
  );
}

function LogoHolder() {
  return (
    <View
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        padding: moderateScale(20),
        borderRadius: moderateScale(20),
        borderWidth: moderateScale(4),
        borderColor: "#1A6144",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 10,

        elevation: 15,
      }}
    >
      <Logo height={scale(160)} width={scale(160)} />
    </View>
  );
}

function BottomHeader() {
  return (
    <View
      style={{
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20),
      }}
    >
      <Text
        style={{
          fontFamily: "Inter-ExtraBoldItalic",
          fontSize: moderateScale(34),
          color: "#26C485",
          textAlign: "center",
        }}
      >
        SAHYOG
      </Text>
    </View>
  );
}

function MainButton({
  onPress,
  children,
  type,
}: {
  onPress?:((event: GestureResponderEvent) => void);
  children: string;
  type?: "FARMER" | "BUYER";
}) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: moderateVerticalScale(20),
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          backgroundColor: "#BCECD9",
          borderColor: "#1A6144",
          borderWidth: moderateScale(4),
          borderRadius: moderateScale(7),
          width: "80%",
          position: "relative",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: moderateScale(24),
              fontFamily: "LexendDeca_400Regular",
              margin: moderateScale(10),
              textAlign: "center",
              color: "#1A6144",
            }}
          >
            {children}
          </Text>
          <View
            style={{
              position: "absolute",
              // height:'100%',
              // width:'100%',
              right: moderateScale(10),
              top: moderateScale(13),
            }}
          >
            {type === "FARMER" ? (
              <FarmerSVG height={scale(23)} width={scale(23)} />
            ) : (
              <BuyerSVG height={scale(23)} width={scale(23)} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function Login({navigation}:NativeStackScreenProps<any,any>) {
  let [fontsLoaded] = useFonts({
    "Inter-ExtraBoldItalic":
      "https://rsms.me/inter/font-files/Inter-ExtraBoldItalic.otf?v=3.12",
    LexendDeca_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeadingText />
      <LogoHolder />
      <BottomHeader />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          marginBottom: moderateVerticalScale(40),
        }}
      >
        <MainButton >Buyer</MainButton>
        <MainButton onPress={()=>{navigation.navigate("Main")}} type="FARMER">Farmer</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5F5D6",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
