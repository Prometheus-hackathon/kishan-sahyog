import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Touchable,
  TouchableOpacity,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import { BuyerScreenNavigator } from "./Components/Screens/Buyer-Specific/Navigator";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import BackSVG from "./assets/custom/chevron-left.svg";
import ClockSVG from "./assets/custom/clock-history.svg";
import AvatarSVG from "./assets/custom/avatar.svg";
import CallSVG from "./assets/custom/telephone-fill.svg";
import SendSVG from "./assets/custom/send-fill.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { MutableRefObject, useEffect } from "react";

function MessageBox({
  sender,
  children,
}: {
  sender?: boolean;
  children: string;
}) {
  return (
    <View
      style={{
        marginLeft: sender ? "auto" : 0,
        width: scale(300),
        borderTopEndRadius: scale(10),
        borderTopStartRadius: scale(10),
        borderBottomStartRadius: sender ? scale(10) : 0,
        borderBottomEndRadius: sender ? 0 : scale(10),
        backgroundColor: sender ? "#5DB075" : "white",
        marginBottom: moderateVerticalScale(40),
        position: "relative",
        
      }}
    >
      <Text
        style={{
          color: sender ? "#FFFFFF" : "black",
          margin: scale(10),
          marginTop: moderateVerticalScale(20),
          marginBottom: moderateVerticalScale(20),
        }}
      >
       {children}
      </Text>
      <View
        style={{
          position: "absolute",
          backgroundColor: "red",
          height: moderateVerticalScale(0),
          width: scale(0),
          top: "99.95%",
          right: sender ? 0 : "auto",
          // borderBottomWidth:30,
          // borderBottomColor:"#D9FFE6",
          // borderRightWidth:50,
          // borderRightColor:"#5DB075"
          // borderBottomRightRadius:scale(10000),
          borderLeftWidth: scale(50),
          borderLeftColor: "#D9FFE6",
          borderTopWidth: moderateVerticalScale(30),
          borderTopColor: sender ? "#5DB075" : "white",
          transform: [
            {
              rotateY: sender ? "0deg" : "180deg",
            },
          ],
          // borderBottomLeftRadius:scale(10000),
        }}
      ></View>
    </View>
  );
}

function ChatScreen() {
  // const [KeyboardHeight, setKeyboardHeight] = React.useState(0);

  // useEffect(()=>{
  //   const SHowSub = Keyboard.addListener("keyboardDidShow", (e)=>{

  //     setKeyboardHeight(e.endCoordinates.height)
  //   })
  //   const HideSub = Keyboard.addListener("keyboardDidHide", (e)=>{

  //     setKeyboardHeight(0)
  //   })
  //   return ()=>{
  //     SHowSub.remove()
  //     HideSub.remove()
  //   }
  // },[])

  const [Message, setMessage] = React.useState<
    {
      text: string;
      sender: boolean;
    }[]
  >();

  const [InputText, setInputText] = React.useState("");

  // const scrollToEnd = () => {
  //   this.scrollView.scrollToEnd();
  // }

  const ScrollRef = React.useRef<ScrollView>(null);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D9FFE6",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
       ref={ScrollRef}
        
          contentContainerStyle={{
            paddingLeft: scale(15),
            paddingRight: scale(15),
          }}
          style={{
            backgroundColor: "#D9FFE6",
            flex: 1,
          }}
        >
          {Message?.map((item, index) => {return <MessageBox key={index} sender={item.sender}>{item.text}</MessageBox>})}
          
        </ScrollView>

        <View
          style={{
            alignItems: "center",
            backgroundColor: "#E3FFED",
            height: moderateVerticalScale(50),
            borderColor: "#2C5A68",
            borderWidth: scale(1),
            paddingLeft: scale(3),
            paddingRight: scale(3),
            marginLeft: scale(10),
            marginRight: scale(10),
            marginBottom: scale(10),
            borderRadius: scale(5),
            flexDirection: "row",
          }}
        >
          <TextInput
          value={InputText||""}
          onChangeText={(text)=>{
            setInputText(text)
          }}
            placeholder="Type Your Message Here ......"
            placeholderTextColor={"#75A6B6"}
            style={{
              paddingTop: moderateVerticalScale(10),
              paddingBottom: moderateVerticalScale(10),
              fontSize: scale(15),
              borderColor: "#2C5A68",
              backgroundColor: "#BCECD9",
              // margin: scale(5),
              marginRight: scale(5),
              marginTop: scale(5),
              marginBottom: scale(5),
              paddingLeft: scale(10),
              borderRadius: scale(5),
              borderWidth: scale(1),

              flexGrow: 1,
            }}
          />
          <Pressable
          onLongPress={()=>{
            setMessage((prev)=>{
              return [
                ...(prev||[]),
                {
                  text:InputText,
                  sender:false
                }
              ]
            })
            setInputText("")
          
            ScrollRef.current?.scrollToEnd({animated:false})

          }}
          onPress={()=>{
            setMessage((prev)=>{
              return [
                ...(prev||[]),
                {
                  text:InputText,
                  sender:true
                }
              ]
            })
            setInputText("")
          
            ScrollRef.current?.scrollToEnd({animated:false})
          }}
            style={{
              backgroundColor: "#BCECD9",
              height: moderateVerticalScale(40),
              borderColor: "#2C5A68",
              borderWidth: scale(1),
              borderRadius: moderateVerticalScale(20),
              width: moderateVerticalScale(40),
              padding: moderateVerticalScale(7),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SendSVG fill="#2C5A68" height="100%" width="100%" />
          </Pressable>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chats-Screen">
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Farmer"
          options={{
            headerTitle: "",
            headerBackground: () => (
              <View style={{ backgroundColor: "#C5F5D6", height: 100 }} />
            ),
          }}
          component={Main}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Buyer"
          component={BuyerScreenNavigator}
        />
        <Stack.Screen
          name="Chats-Screen"
          options={{
            headerShown: true,
            header: (props) => {
              return (
                <View
                  style={{
                    height: moderateVerticalScale(100),
                    backgroundColor: "#D9FFE6",
                  }}
                >
                  <View
                    style={{
                      height: moderateVerticalScale(50),
                      backgroundColor: "#E3FFED",
                      borderColor: "#2C5A68",
                      borderWidth: scale(1),
                      borderRadius: scale(5),
                      margin: scale(10),
                      marginTop: StatusBar.currentHeight,
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: scale(10),
                      paddingRight: scale(10),
                    }}
                  >
                    <BackSVG
                      fill="black"
                      width={scale(30)}
                      height={scale(30)}
                    />
                    <View
                      style={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: scale(20),
                          color: "#6C4506",
                        }}
                      >
                        Ram Krishna
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <ClockSVG
                          fill="black"
                          width={scale(17)}
                          height={scale(17)}
                        />
                        <Text
                          style={{
                            marginLeft: scale(5),
                            fontSize: scale(15),
                            color: "#616F69",
                            fontWeight: "600",
                          }}
                        >
                          12:40 PM
                        </Text>
                      </View>
                    </View>
                    <CallSVG
                      fill="orange"
                      width={scale(30)}
                      height={scale(30)}
                    />
                  </View>
                </View>
              );
            },
          }}
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
