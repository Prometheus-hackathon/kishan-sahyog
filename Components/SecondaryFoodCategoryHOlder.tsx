import { IconButton, useTheme } from "react-native-paper";
import { View } from "react-native";
import {Text} from 'react-native-paper'

export function SecondaryCategoryHolder(){
    const theme = useTheme();
    return <View
    style={{
      height: 230,
      width: 170,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 10,
      margin: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    }}
  >
    <Text
      variant="labelMedium"
      style={{
        textAlign: "center",
      }}
    >
      $ITEM_NAME
    </Text>
    <View
      style={{
        flexGrow: 1,
        backgroundColor: theme.colors.backdrop,
        borderRadius: 10,
      }}
    ></View>
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View>
        <Text>Rs. 400/Kg</Text>
        <Text>Mr. Ram Kishan</Text>
      </View>
      <IconButton
        icon="thumb-up"
        iconColor={theme.colors.primary}
        size={20}
        onPress={() => {}}
      />
    </View>
  </View>
}