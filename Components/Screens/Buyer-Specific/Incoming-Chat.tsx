import React from "react";
import { View, Text, ScrollView } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

function ChatLog() {
  return (
    <View
      style={{
        marginTop: moderateScale(10),
        marginBottom: moderateScale(10),
        height: moderateScale(90),
        backgroundColor: "#BCECD9",
        borderColor: "#2C5A68",
        marginLeft: scale(10),
        marginRight: scale(10),
        borderRadius: scale(10),
        borderWidth: scale(2),
        padding: scale(10),
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: scale(50),
          height: scale(40),
          width: scale(40),
          marginRight: scale(10),
        }}
      ></View>
      <View
        style={{
          width: "80%",
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#6C4506",
              fontSize: scale(20),
              fontWeight: "600",
            }}
          >
            Ram Krishna
          </Text>
          <Text
            style={{
              color: "#795C22",
              fontSize: scale(15),
              textDecorationLine: "underline",
            }}
          >
            12m ago
          </Text>
        </View>
        <Text>
          He'll want to use your yacht, and I don't want this thing smelling
          like fish.
        </Text>
      </View>
    </View>
  );
}

export function ChatLogsScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#D9FFE6",
        paddingTop: moderateScale(20),
      }}
    >
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
      <ChatLog />
    </ScrollView>
  );
}
