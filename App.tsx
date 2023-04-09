import { StatusBar } from "expo-status-bar";
import React, { MutableRefObject, useRef } from "react";
import { faker } from "@faker-js/faker/locale/en_IND";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import Slider from "@react-native-community/slider";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text as RNText,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking,
  ToastAndroid,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from "react-native";
import {
  Button,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  Surface,
  useTheme,
  Appbar,
  TextInput as PaperTextInput,
  Snackbar,
  IconButton,
  MD3Colors,
  Avatar,
  FAB,
  TouchableRipple,
  List,
  Chip,
} from "react-native-paper";
import { BottomNavigation, Text } from "react-native-paper";
import { MainCategoryHolder } from "./Components/MainCategoryHolder";
import { SecondaryCategoryHolder } from "./Components/SecondaryFoodCategoryHOlder";
import { SchemeData } from "./Components/schemes";

function Generator(Num: number) {
  let arr = [];
  for (let index = 0; index < Num; index++) {
    arr.push({
      senderName: faker.name.firstName(),
      url: faker.image.avatar(),
      content: faker.lorem.sentence(),
      time: faker.date.past().toLocaleTimeString(),
    });
  }
  return arr;
}

function ChatFaker({
  setSelected,
  setConvo,
  url,
  senderName,
  time,
  content,
}: {
  setConvo: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<
    React.SetStateAction<
      | {
          name: string;
          url: string;
        }
      | undefined
    >
  >;
  url: string;
  senderName: string;
  time: string;
  content: string;
}) {
  return (
    <TouchableRipple
      onPress={() => {
        setConvo((prev) => !prev);
        setSelected((prev) => {
          return {
            name: senderName,
            url: url,
          };
        });
      }}
      style={{
        backgroundColor: theme.colors.background,
        padding: 16,
        borderRadius: 8,
        margin: 8,
        elevation: 4,
      }}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            marginRight: 16,
            // borderRadius: 30,
          }}
        >
          <Image
            source={{ uri: url }}
            // source={require('./assets/material/test.gif')}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
              // overlayColor: 'white',
            }}
          />
        </View>
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text variant="titleLarge">{senderName}</Text>
            <Text variant="labelLarge">{time}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 2,
            }}
          >
            <Text variant="bodyMedium" style={{ flex: 1, flexWrap: "wrap" }}>
              {content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
}

function App({ navigation }: any) {
  const [bottomBarEnable, setBottomBarEnable] = React.useState(true);
  const Theme = useTheme();

  const [screen, setScreen] = React.useState<"Home" | "Buyer" | "Farmer">(
    "Home"
  );

  const HomeStore = () => {
    const [MainCategory, setMainCategory] = React.useState<
      {
        name: string;
        image: string;
      }[]
    >([
      {
        image: "https://kj1bcdn.b-cdn.net/media/81142/wheat.jpg",
        name: "WHEAT",
      },
      {
        image:
          "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/9/2022_9$largeimg_1796544493.jpg",
        name: "RICE",
      },
      {
        image:
          "https://myfavouritepastime.files.wordpress.com/2018/10/img_2807.jpg",
        name: "MUSTARD",
      },
      {
        image:
          "https://i0.wp.com/www.manitobapulse.ca/wp-content/uploads/2016/06/pulses.jpg",
        name: "PULSES",
      },
      {
        image:
          "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
        name: "MAIZE",
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1751/6601/products/Proso_Millet__DSC5342.jpg?v=1606373494",
        name: "MILLET",
      },
    ]);
    const Theme = useTheme();
    const [text, setText] = React.useState("");
    const [showMore, setShowMore] = React.useState(false);
    const [filteredData, setFilteredData] = React.useState("");
    const textInputRef = useRef() as MutableRefObject<TextInput>;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              if (showMore === true) {
                setShowMore((prev) => !prev);
              }
              if (showMore === false) {
                setScreen((prev) => "Home");
              }
            }}
          />
          <Appbar.Content title="Store" />

          <Appbar.Action
            onPress={() => {
              textInputRef.current.focus();
            }}
            icon="magnify"
          />
        </Appbar.Header>
        <PaperTextInput
          onSubmitEditing={() => {
            setFilteredData((prev) => text);
          }}
          ref={textInputRef}
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
          mode="flat"
          placeholder="Enter the crop name you want to search"
          value={text}
          onChangeText={(text) => {
            setText(text);
          }}
        />
        <View
          style={{
            // backgroundColor:'red',
            flexGrow: 1,

            // flexWrap: "wrap",
          }}
        >
          {showMore ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                flexGrow: 1,
              }}
              contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                flexGrow: 1,
                paddingBottom: 150,
                justifyContent: "space-evenly",
              }}
            >
              {[
                ...Array.from({ length: 20 }).map((item, index) => {
                  return <SecondaryCategoryHolder key={index} />;
                }),
              ]}
            </ScrollView>
          ) : (
            <View
              style={{
                flexWrap: "wrap",
                flexGrow: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              {MainCategory.filter((items) => {
                if (filteredData === "") {
                  return items;
                } else if (
                  items.name.toLowerCase().includes(filteredData.toLowerCase())
                ) {
                  return items;
                }
              }).map((item, index) => (
                <MainCategoryHolder
                  setState={setShowMore}
                  key={index}
                  url={item.image}
                >
                  {item.name}
                </MainCategoryHolder>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  };

  function ExpandedChat({
    sender,
    children,
  }: {
    sender: boolean;
    children: string;
  }) {
    return (
      <>
        <View
          style={{
            width: "80%",
            marginLeft: sender ? "5%" : "auto",
            marginRight: "5%",
            marginTop: 8,
            marginBottom: 8,
            backgroundColor: sender ? "#F6F6F6" : theme.colors.surfaceVariant,
            elevation: 3,
            position: "relative",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text>{children}</Text>
        </View>
      </>
    );
  }

  function RandomMessageConvo(parse: number) {
    let arr = [];
    for (let i = 0; i < parse; i++) {
      arr.push({
        sender: Math.random() > 0.5 ? true : false,
        content: faker.lorem.paragraph(),
      });
    }
    return arr;
  }

  const ChatStore = () => {
    const theme = useTheme();
    const [HeaderTextInputEnable, setHeaderTextInputEnable] =
      React.useState(false);
    const [filterText, setFilterText] = React.useState("");
    const InputRef = useRef() as MutableRefObject<TextInput>;
    const [showConvo, setShowConvo] = React.useState(false);
    const [chatInput, setChatInput] = React.useState("");
    const [selectedChat, setSelectedChat] = React.useState<{
      name: string;
      url: string;
    }>();
    const [Chats, setChats] = React.useState<
      {
        senderName: string;
        url: string;
        content: string;
        time: string;
      }[]
    >(Generator(30));
    const [MessageConvo, SetMessageConvo] = React.useState<
      {
        sender: boolean;
        content: string;
      }[]
    >(RandomMessageConvo(10));

    const ScrollRef = useRef() as MutableRefObject<ScrollView>;

    React.useEffect(() => {
      if (HeaderTextInputEnable) {
        setTimeout(() => {
          InputRef.current.focus();
        }, 100);
      }
    }, [HeaderTextInputEnable]);

    return (
      <>
        <Appbar.Header>
          {!showConvo ? (
            HeaderTextInputEnable ? (
              <PaperTextInput
                value={filterText}
                onChangeText={(text) => {
                  setFilterText(text);
                }}
                onSubmitEditing={() => {
                  setHeaderTextInputEnable((prev) => !prev);
                }}
                ref={InputRef}
                style={{
                  flexGrow: 1,
                }}
                mode="flat"
                placeholder="Search"
              />
            ) : (
              <>
                <Appbar.Content title="Chat" />
                <Appbar.Action
                  icon="magnify"
                  onPress={() => {
                    setHeaderTextInputEnable((prev) => !prev);
                  }}
                />
              </>
            )
          ) : (
            <>
              <Appbar.BackAction
                onPress={() => {
                  setShowConvo((prev) => !prev);
                  setFilterText("");
                  setHeaderTextInputEnable(false);
                }}
              />
              <Appbar.Content title={selectedChat?.name} />
              <Avatar.Image
                size={35}
                style={
                  {
                    // width: 40,
                    // height: 40,
                  }
                }
                source={{
                  uri: selectedChat?.url,
                }}
              />
            </>
          )}
        </Appbar.Header>
        <ScrollView ref={ScrollRef}>
          {!showConvo
            ? Chats.filter((item) => {
                if (filterText == "") {
                  return item;
                } else if (
                  item.senderName
                    .toLocaleLowerCase()
                    .includes(filterText.toLocaleLowerCase())
                ) {
                  return item;
                }
              }).map((item, index) => (
                <ChatFaker
                  setSelected={setSelectedChat}
                  setConvo={setShowConvo}
                  key={index}
                  {...item}
                />
              ))
            : MessageConvo.map((item, index) => (
                <ExpandedChat key={index} sender={item.sender}>
                  {item.content}
                </ExpandedChat>
              ))}
        </ScrollView>
        {showConvo && (
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingTop: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PaperTextInput
              value={chatInput}
              onChangeText={(e) => {
                setChatInput(e);
              }}
              style={{
                flexGrow: 1,
              }}
              mode="flat"
              placeholder="Type a message"
            />
            <IconButton
              icon="send-circle"
              iconColor={theme.colors.secondary}
              size={40}
              onPress={() => {
                SetMessageConvo((prev) => {
                  return [
                    ...prev,
                    {
                      sender: false, //fix later
                      content: chatInput,
                    },
                  ];
                });

                setChatInput("");
                ScrollRef.current.scrollToEnd();
              }}
            />
          </View>
        )}
      </>
    );
  };
  const ProfileStore = () => {
    const [firstName, setFirstName] = React.useState("Dhananjay");
    const [lastName, setLastName] = React.useState("Senday");
    const [phoneNumber, setPhoneNumber] = React.useState("9334821750");
    const [address, setAddress] = React.useState(
      "Graphic Era Deemed University"
    );
    const [upi, setUpi] = React.useState("sometung@upi");
    const [aadhar, setAadhar] = React.useState("566234567890");

    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Personal Data" />
        </Appbar.Header>
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://i.pravatar.cc/150?u=a042581f4e29026703223",
            }}
          />
          <Text
            style={{
              marginTop: 10,
            }}
            variant="labelLarge"
          >
            @DhananjaySenday453
          </Text>
          <PaperTextInput
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
            }}
            style={{
              width: "90%",
              marginTop: 20,
            }}
            label="First Name"
            mode="outlined"
          />
          <PaperTextInput
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
            }}
            style={{
              width: "90%",
              marginTop: 20,
            }}
            label="Last Name"
            mode="outlined"
          />
          <PaperTextInput
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            style={{
              width: "90%",
              marginTop: 20,
            }}
            label="Phone Number"
            mode="outlined"
          />
          <PaperTextInput
            value={address}
            onChangeText={(text) => {
              setAddress(text);
            }}
            style={{
              width: "90%",
              marginTop: 20,
            }}
            label="Address"
            mode="outlined"
          />
          <PaperTextInput
            value={upi}
            onChangeText={(text) => {
              setUpi(text);
            }}
            style={{
              width: "90%",
              marginTop: 20,
            }}
            label="UPI Address"
            mode="outlined"
          />
          <PaperTextInput
            value={aadhar}
            onChangeText={(text) => {
              setAadhar(text);
            }}
            style={{
              width: "90%",
              marginTop: 20,
            }}
            label="Adhaar Card"
            mode="outlined"
          />
          <Button
            onPress={() => {
              ToastAndroid.show("Updating Changes ", ToastAndroid.SHORT);
            }}
            mode="elevated"
            contentStyle={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            icon={"content-save"}
            style={{
              marginTop: 20,
            }}
          >
            Save
          </Button>
        </View>
      </>
    );
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home" },
    { key: "chat", title: "Chat", focusedIcon: "chat" },
    { key: "profile", title: "Profile", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeStore,
    chat: ChatStore,
    profile: ProfileStore,
  });

  return (
    <>
      {screen === "Home" ? (
        <View
          style={{
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
            backgroundColor: Theme.colors.background,
            position: "relative",
          }}
        >
          <View
            style={{
              marginTop: 160,
            }}
          >
            <Text
              variant="displaySmall"
              style={{
                textAlign: "center",
              }}
            >
              KISAAN
            </Text>
            <Surface
              elevation={1}
              mode="elevated"
              style={{
                marginTop: 30,
                marginBottom: 30,
                padding: 20,
                height: 170,
                width: 170,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("./assets/material/Logo.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Surface>
            <Text
              variant="displaySmall"
              style={{
                textAlign: "center",
              }}
            >
              SAHYOG
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              gap: 25,
              marginBottom: 50,
              paddingLeft: 20,
              paddingRight: 20,
              width: "100%",
            }}
          >
            <Button
              icon="account-group"
              mode="elevated"
              contentStyle={{
                paddingTop: 10,
                paddingBottom: 10,
              }}
              onPress={() => {
                navigation.navigate("Farmer");
              }}
            >
              Login As Farmer
            </Button>
            <Button
              icon="account-group"
              mode="elevated"
              contentStyle={{
                paddingTop: 10,
                paddingBottom: 10,
              }}
              onPress={() => setScreen((prev) => "Buyer")}
            >
              Login As Buyer
            </Button>
          </View>
        </View>
      ) : screen == "Buyer" ? (
        <>
          <View
            style={{
              flex: 1,
              backgroundColor: Theme.colors.background,
            }}
          >
            <BottomNavigation
              onIndexChange={setIndex}
              renderScene={renderScene}
              navigationState={{
                index,
                routes,
              }}
            />
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(0, 110, 0)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(141, 251, 119)",
    onPrimaryContainer: "rgb(0, 34, 0)",
    secondary: "rgb(84, 99, 77)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(215, 232, 205)",
    onSecondaryContainer: "rgb(18, 31, 14)",
    tertiary: "rgb(56, 101, 104)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(188, 235, 238)",
    onTertiaryContainer: "rgb(0, 32, 34)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(252, 253, 246)",
    onBackground: "rgb(26, 28, 24)",
    surface: "rgb(252, 253, 246)",
    onSurface: "rgb(26, 28, 24)",
    surfaceVariant: "rgb(223, 228, 215)",
    onSurfaceVariant: "rgb(67, 72, 63)",
    outline: "rgb(115, 121, 110)",
    outlineVariant: "rgb(195, 200, 188)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 49, 45)",
    inverseOnSurface: "rgb(241, 241, 235)",
    inversePrimary: "rgb(114, 222, 94)",
    elevation: {
      level0: "transparent",
      level1: "rgb(239, 246, 234)",
      level2: "rgb(232, 242, 226)",
      level3: "rgb(224, 237, 219)",
      level4: "rgb(222, 236, 217)",
      level5: "rgb(217, 233, 212)",
    },
    surfaceDisabled: "rgba(26, 28, 24, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 24, 0.38)",
    backdrop: "rgba(44, 50, 41, 0.4)",
  },
};

function Farmer({ navigation }: NativeStackScreenProps<any, any>) {
  return (
    <>
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content title="Farmer Guide" />
          <Appbar.Action icon="cog" />
          <Appbar.Action icon="bell-ring" />
        </Appbar.Header>

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 120,
            flexGrow: 1,
            position: "relative",
          }}
        >
          <Surface
            style={{
              width: 120,
              height: 120,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <Pressable
              android_ripple={{
                borderless: true,
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <FontAwesome name="tree" size={24} color="black" />
              <Text
                variant="labelLarge"
                style={{
                  textAlign: "center",
                }}
              >
                Disease Detection
              </Text>
            </Pressable>
          </Surface>
          <Surface
            style={{
              width: 120,
              height: 120,
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Schemes");
              }}
              android_ripple={{
                borderless: true,
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Entypo name="home" size={24} color="black" />
              <Text
                variant="labelLarge"
                style={{
                  textAlign: "center",
                }}
              >
                Schemes for You
              </Text>
            </Pressable>
          </Surface>
          <Surface
            style={{
              width: 120,
              height: 120,
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("MyFarm");
              }}
              android_ripple={{
                borderless: true,
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <MaterialCommunityIcons
                name="food-apple"
                size={24}
                color="black"
              />
              <Text
                variant="labelLarge"
                style={{
                  textAlign: "center",
                }}
              >
                My Farm
              </Text>
            </Pressable>
          </Surface>
          <Surface
            style={{
              width: 120,
              height: 120,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <Pressable
              onPress={() => {
                // navigation.navigate("Farming Knowledge");
              }}
              android_ripple={{
                borderless: true,
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <FontAwesome name="book" size={24} color="black" />
              <Text
                variant="labelLarge"
                style={{
                  textAlign: "center",
                }}
              >
                Farming Knowledge
              </Text>
            </Pressable>
          </Surface>
          <View
            style={{
              position: "absolute",
              top: 90,
              backgroundColor: theme.colors.surfaceVariant,
              borderRadius: 100,
              height: 80,
              width: 80,
            }}
          >
            <Pressable
              android_ripple={{
                borderless: true,
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                console.log("first");
                console.clear();
              }}
            >
              <FontAwesome5 name="robot" size={24} color="black" />
            </Pressable>
          </View>
          <View
            style={{
              height: "100%",
              position: "absolute",
              backgroundColor: theme.colors.secondaryContainer,
              width: 15,
              top: 100,
              zIndex: -1,
            }}
          ></View>
        </View>
        <View
          style={{
            position: "absolute",
            height: 260,
            width: "40%",
            bottom: 0,
            backgroundColor: theme.colors.secondaryContainer,
            borderTopRightRadius: 50,
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 30,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text variant="displaySmall">34</Text>
              <Text style={{ fontSize: 15 }}>o</Text>
              <Text variant="displaySmall">C</Text>
            </View>
            <Text>MAX</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text variant="displaySmall">34</Text>
              <Text style={{ fontSize: 15 }}>o</Text>
              <Text variant="displaySmall">C</Text>
            </View>
            <Text>MIN</Text>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            height: 260,
            // marginLeft:'auto',
            width: "40%",
            bottom: 0,
            right: 0,
            backgroundColor: theme.colors.secondaryContainer,
            alignItems: "center",
            paddingTop: 30,
            borderTopLeftRadius: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              icon="weather-pouring"
              mode="contained"
              iconColor={theme.colors.onPrimaryContainer}
              containerColor={theme.colors.background}
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <View>
              <Text variant="titleSmall">No Rain</Text>
              <Text variant="labelLarge">Rain</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              icon="water"
              mode="contained"
              iconColor={theme.colors.onPrimaryContainer}
              containerColor={theme.colors.background}
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <View>
              <Text variant="titleSmall">43%</Text>
              <Text variant="labelLarge">Humidity</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              icon="weather-windy"
              mode="contained"
              iconColor={theme.colors.onPrimaryContainer}
              containerColor={theme.colors.background}
              size={30}
              onPress={() => console.log("Pressed")}
            />
            <View>
              <Text variant="titleSmall">99.4 Km/hr</Text>
              <Text variant="labelLarge">Wind</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

function Schemes({ navigation }: NativeStackScreenProps<any, any>) {
  const theme = useTheme();

  return (
    <>
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content title="Schemes For You" />
        </Appbar.Header>
        {SchemeData.map((items, index) => {
          const [expanded, setExpanded] = React.useState(true);
          const handlePress = () => setExpanded(!expanded);
          return (
            <List.Accordion
              key={index}
              title={items.fields.schemeShortTitle}
              left={(props) => <List.Icon {...props} icon="folder" />}
              expanded={expanded}
              onPress={handlePress}
            >
              <View>
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  {items.fields.tags.map((item, index) => {
                    return (
                      <Chip
                        style={{
                          margin: 5,
                        }}
                        key={index}
                        icon="information"
                        // onPress={() => console.log("Pressed")}
                      >
                        {item}
                      </Chip>
                    );
                  })}
                </View>

                <View
                  style={{
                    marginTop: 10,
                    // flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <Text variant="labelLarge">Scheme Name</Text>
                  <Text>{items.fields.schemeName}</Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Text variant="labelLarge">Nodal Ministry</Text>
                  <Text>{items.fields.nodalMinistryName}</Text>
                </View>

                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  {items.fields.schemeCategory.map((item, index) => {
                    return (
                      <View key={index}>
                        <Text variant="labelLarge">Scheme Category</Text>
                        <Text>{item}</Text>
                      </View>
                    );
                  })}
                </View>

                <Button
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 30,
                  }}
                  onPress={() => {
                    Linking.openURL("https://www.myscheme.gov.in/");
                  }}
                  mode="elevated"
                >
                  Click me to Know More About Scheme
                </Button>
              </View>
            </List.Accordion>
          );
        })}
      </ScrollView>
    </>
  );
}

function MyFarm({ navigation }: NativeStackScreenProps<any, any>) {
  const theme = useTheme();
  const [storeData, setStoreData] = React.useState<
    {
      randId: number;
      ItemName: string;
      ItemPrice: string;
      Quantity_Range: number;
      estimatedDelivery: string;
      ImageInput: string;
    }[]
  >([]);
  const [showInput, setShowInput] = React.useState(false);
  const [ImageInput, setImageInput] = React.useState("");
  const [Quantity_Range, Set_Quantity_Range] = React.useState<number>(0);
  const [ItemName, SetItemName] = React.useState("");
  const [ItemPrice, SetItemPrice] = React.useState("");
  const [estimatedDelivery, SetEstimatedDelivery] = React.useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImageInput(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setImageInput(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      {showInput ? (
        <>
          <Appbar.Header>
            <Appbar.BackAction onPress={()=>{
              setShowInput(false)

            }} />
            <Appbar.Content title="Add Items" />
            <Appbar.Action
              icon="plus"
              onPress={() => {
                setStoreData([
                  ...storeData,
                  {
                    randId: Math.random(),
                    ItemName,
                    ItemPrice,
                    Quantity_Range,
                    estimatedDelivery,
                    ImageInput,
                  },
                ]);
                SetItemName("");
                SetItemPrice("");
                SetEstimatedDelivery("");
                Set_Quantity_Range(0);
                setImageInput("");

                setShowInput(false);
              }}
            />
          </Appbar.Header>
          <View
            style={{
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginTop: 40,
                height: 140,
                width: 140,
                borderRadius: 20,
                backgroundColor: "grey",
              }}
            >
              {ImageInput && (
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 20,
                  }}
                  source={{
                    uri: ImageInput,
                  }}
                />
              )}
            </View>
            <View
              style={{
                flexGrow: 1,
                width: "100%",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              {/* <PaperTextInput style={{
              marginTop:20,
              width:'100%',
              // marginLeft:20,
              // marginRight:20
            }} label="Enter Image Url" value={ImageInput} onChangeText={(e)=>{
              setImageInput(e)
            }}/> */}

              <View
                style={{
                  marginTop: 15,
                  paddingLeft: 80,
                  paddingRight: 80,
                }}
              >
                <Button
                  mode="elevated"
                  onPress={() => {
                    pickImage();
                  }}
                >
                  Upload Image
                </Button>
                <Text
                  variant="labelLarge"
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                    textAlign: "center",
                  }}
                >
                  Or
                </Text>
                <Button
                  mode="elevated"
                  onPress={() => {
                    takePhoto();
                  }}
                >
                  Take Images
                </Button>
              </View>
              <PaperTextInput
                style={{
                  marginTop: 20,
                  marginBottom: 30,
                }}
                label="Item Name"
                value={ItemName}
                onChangeText={(e) => {
                  SetItemName(e);
                }}
              />

              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <PaperTextInput
                  style={{
                    marginTop: 20,
                    marginBottom: 30,
                  }}
                  keyboardType="numeric"
                  label="Item Price"
                  value={ItemPrice}
                  onChangeText={(e) => {
                    SetItemPrice(e);
                  }}
                />
              </KeyboardAvoidingView>
              <PaperTextInput
                style={{
                  marginTop: 20,
                  marginBottom: 30,
                }}
                label="Estimated Delivery TIme"
                value={estimatedDelivery}
                onChangeText={(e) => {
                  SetEstimatedDelivery(e);
                }}
              />
              <View
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <Text variant="labelLarge" style={{}}>
                  Quantity Range <Text>{Quantity_Range}</Text>
                </Text>

                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(val) => Set_Quantity_Range(val)}
                  value={Quantity_Range}
                  step={1}
                  thumbTintColor={theme.colors.primary}
                  minimumTrackTintColor={theme.colors.secondaryContainer}
                  maximumTrackTintColor={theme.colors.onBackground}
                />
              </View>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <Appbar.Header>
            <Appbar.BackAction onPress={()=>{
              navigation.goBack()
            }}/>
            <Appbar.Content title="My Store" />
            <Appbar.Action icon="plus" onPress={() => setShowInput(true)} />
          </Appbar.Header>
          {storeData.length > 0 ? (
            storeData.map((item, index) => {
              return (
                <Surface
                  key={item.randId}
                  style={{
                    height: 140,
                    position: "relative",

                    marginBottom: 20,
                    marginTop: 20,

                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 10,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      height: 140,
                      width: 140,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    source={{
                      uri: item.ImageInput,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      <Text variant="headlineSmall">{item.ItemName}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <Text
                          variant="labelLarge"
                          style={{
                            color: theme.colors.primary,
                          }}
                        >
                          QUANTITY
                        </Text>
                        <Text>{item.Quantity_Range}</Text>
                        <Text
                          style={{
                            color: theme.colors.tertiary,
                          }}
                        >
                          tonnes(s)
                        </Text>
                      </View>
                      <View
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <Text
                          variant="labelLarge"
                          style={{
                            color: theme.colors.primary,
                          }}
                        >
                          PRICE
                        </Text>
                        <Text>{item.ItemPrice}</Text>
                        <Text
                          style={{
                            color: theme.colors.tertiary,
                          }}
                        >
                          Rs
                        </Text>
                      </View>
                      <View
                        style={{
                          // justifyContent:'center'
                          alignItems: "center",
                        }}
                      >
                        <Text
                          variant="labelLarge"
                          style={{
                            color: theme.colors.primary,
                          }}
                        >
                          ES. TIME
                        </Text>
                        <Text>{item.estimatedDelivery}</Text>
                        <Text
                          style={{
                            color: theme.colors.tertiary,
                          }}
                        >
                          Days
                        </Text>
                      </View>
                    </View>
                  </View>
                  <IconButton
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                    icon="close"
                    iconColor={theme.colors.primary}
                    size={20}
                    onPress={() => {
                      let temp = storeData;
                      temp = temp.filter((all) => all.randId !== item.randId);
                      setStoreData((prev) => temp);
                    }}
                  />
                </Surface>
              );
            })
          ) : (
            <View
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                variant="headlineSmall"
                style={{
                  marginBottom: 60,
                }}
              >
                No Items Added
              </Text>
              <Button
                onPress={() => {
                  setShowInput((prev) => true);
                }}
                mode="contained-tonal"
              >
                Add Items
              </Button>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default function Main() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={App}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Farmer"
            component={Farmer}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Schemes"
            component={Schemes}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MyFarm"
            component={MyFarm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
