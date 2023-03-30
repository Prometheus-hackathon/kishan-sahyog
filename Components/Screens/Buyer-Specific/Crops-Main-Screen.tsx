import { moderateVerticalScale, scale } from "react-native-size-matters";
import { Text,View } from "react-native";
import { ScreenElements } from "../../Modules/ScreenElements";

export function CropsMainScreen(){
    return <View style={{
        backgroundColor:"#D9FFE6",
        flex:1,
    }}>
        <Text
    style={{
      textAlign: "center",
      fontFamily: "LexendDeca_400Regular",
      paddingTop: moderateVerticalScale(15),
      fontSize: scale(15),
    }}
  >
    Select The Crop You Want To Buy
  </Text>
  <View
    style={{
      flexGrow: 1,
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }}
    >
    <ScreenElements
      imageUri={require("../../../assets/food-images/wheat.png")}
      text="WHEAT"
      />
    <ScreenElements
      imageUri={require("../../../assets/food-images/rice.png")}
      text="RICE"
      />
    <ScreenElements
      imageUri={require("../../../assets/food-images/mustard.png")}
      text="MUSTARD"
    />
    <ScreenElements
      imageUri={require("../../../assets/food-images/pulses.png")}
      text="PULSES"
      />
    <ScreenElements
      imageUri={require("../../../assets/food-images/maize.png")}
      text="MAIZE"
      />
    <ScreenElements
      imageUri={require("../../../assets/food-images/milleet.png")}
      text="MILLET"
      />
  </View>
</View>
 
}