import type { BottomTabHeaderProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";
import AvatarSVG from "../../../assets/custom/avatar.svg";
import SearchSVG from "../../../assets/custom/search.svg";
import { View, TextInput, Text } from "react-native";
import ChatSVG from "../../../assets/custom/chat-right-dots-fill.svg";
export function Buyer_Tab_Header(props: BottomTabHeaderProps) {
 

  return (
    <View
      style={{
        backgroundColor: "#D9FFE6",
        height: moderateVerticalScale(90),
        paddingTop: moderateVerticalScale(40),
        flexDirection: "row",
        paddingLeft: scale(20),
        paddingRight: scale(20),
      }}
    >
      <View
        style={{
          position: "relative",
          elevation: 10,
        }}
      >
        {props.route.name === "Chat-Logs" ? (
          <>
            <ChatSVG
              style={{
                position: "absolute",
                left: scale(10),
                top: scale(10),
                zIndex: 1,
              }}
              height={scale(18)}
              width={scale(18)}
              fill="black"
            />
            <TextInput
              style={{
                height: verticalScale(40),
                borderWidth: 1,
                width: scale(275),
                paddingLeft: scale(35),
                backgroundColor: "#BCECD9",
                borderColor: "#2C5A68",
                borderRadius: scale(10),
              }}
              placeholderTextColor="#795C22"
              multiline={true}
              placeholder="Enter the name of the person you want to chat with..."
            />
          </>
        ) : (
          <>
            <SearchSVG
              style={{
                position: "absolute",
                left: scale(10),
                top: scale(10),
                zIndex: 1,
              }}
              height={scale(18)}
              width={scale(18)}
              fill="black"
            />
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                width: scale(275),
                paddingLeft: scale(32),
                backgroundColor: "#BCECD9",
                borderColor: "#2C5A68",
                borderRadius: scale(10),
              }}
              placeholderTextColor="#795C22"
              placeholder="Enter the crop name you want to search"
            />
          </>
        )}
      </View>
      <AvatarSVG
        style={{
          marginLeft: "auto",
        }}
        height={scale(30)}
        width={scale(30)}
      />
    </View>
  );
}
