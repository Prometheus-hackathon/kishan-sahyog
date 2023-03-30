import { LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React from "react";
import { View,Text } from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import { ScreenElements } from "../../Modules/ScreenElements";
import { CropsNavigator } from "./Crops-Page-Navigator";

export function CropSelection(){
        let [fontsLoaded] = useFonts({
          LexendDeca_400Regular,
        });
        if (!fontsLoaded) {
          return null;
        }
        return (
            <CropsNavigator />
        );

}