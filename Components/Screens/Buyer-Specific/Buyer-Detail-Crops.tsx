import { moderateVerticalScale, scale } from "react-native-size-matters";
import { Text, View, ScrollView } from "react-native";
import { ScreenElements } from "../../Modules/ScreenElements";
import { ScreenElementsVAR2 } from "../../Modules/ScreenElementVAR2";

export function MoreCrops() {
  return (
    <View
      style={{
        backgroundColor: "#D9FFE6",
        flex: 1,
      }}
    >
          <ScrollView>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "LexendDeca_400Regular",
          paddingTop: moderateVerticalScale(15),
          fontSize: scale(15),
        }}
      >
        Choose what suits you
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
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
          <ScreenElementsVAR2 />
        </View>
      </ScrollView>
    </View>
  );
}
