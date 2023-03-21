import { View, Text } from "react-native";
import { verticalScale } from "react-native-size-matters";
import SunLogo from "../assets/custom/sun.svg";
import RainLogo from "../assets/custom/rain.svg";
import WindLogo from "../assets/custom/wind.svg";
import HumidityLogo from "../assets/custom/humidity.svg";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";

/**
 *
 * @param props
 * @returns
 *
 * @argument props.city - City name
 * @argument props.degress - Weather in degrees
 * @argument props.type - Weather type
 * @argument props.wind - Wind speed in km/h
 * @argument props.humidity - Humidity in %
 * @argument props.rain - Rain %
 *
 */
export default function WeatherWidget() {
  let [fontsLoaded] = useFonts({
    Lexend_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        backgroundColor: "#BCECD9",
        borderColor: "#1A6144",
        borderWidth: verticalScale(4),
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: verticalScale(15),
        borderRadius: verticalScale(10),
      }}
    >
      <View
        style={{
          backgroundColor: "#E3FFED",
          width: "100%",
          height: verticalScale(100),
          borderRadius: verticalScale(10),
          borderWidth: verticalScale(2),
          borderColor: "#1A6144",
          padding: verticalScale(5),
        }}
      >
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend_500Medium",
                fontSize: verticalScale(16),
                color: "#1A6144",
              }}
            >
              DEHRADHUN
            </Text>
            <Text
              style={{
                fontFamily: "Lexend_500Medium",
                fontSize: verticalScale(16),
                color: "#1A6144",
              }}
            >
              TODAY
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: verticalScale(10),
              paddingRight: verticalScale(10),
            }}
          >
            <View
              style={{
                position: "relative",
              }}
            >
              <Text
                style={{
                  fontFamily: "Lexend_500Medium",
                  fontSize: verticalScale(28),
                  color: "#1A6144",
                }}
              >
                18
              </Text>

              <Text
                style={{
                  fontFamily: "Lexend_500Medium",
                  fontSize: verticalScale(15),
                  color: "#1A6144",
                  position: "absolute",
                  top: verticalScale(0),
                  right: -verticalScale(15),
                }}
              >
                o
              </Text>
            </View>
            <View>
              <SunLogo height={verticalScale(35)} width={verticalScale(35)} />
            </View>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontFamily: "Lexend_500Medium",
              fontSize: verticalScale(14),
              textAlign: "center",
              color: "red",
            }}
          >
            WARNING
          </Text>
          <Text
            style={{
              fontFamily: "Lexend_500Medium",
              fontSize: verticalScale(14),
              textAlign: "center",
              color: "red",
            }}
          >
            INCOMING THUNDERSTORM
          </Text>
          {/* <Text
          style={{
            fontFamily: "Lexend_500Medium",
            fontSize: verticalScale(20),
            textAlign: "center",
            color: "#1A6144",
          }}
        >
          NO WARNING
        </Text> */}
        </View>
      </View>
      <View
        style={{
          marginTop: verticalScale(15),
          backgroundColor: "#E3FFED",
          width: "100%",
          height: verticalScale(80),
          borderRadius: verticalScale(10),
          borderWidth: verticalScale(2),
          borderColor: "#1A6144",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            borderRightWidth: verticalScale(2),
            borderRightColor: "#1A6144",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <WindLogo height={verticalScale(25)} width={verticalScale(25)} />
          </View>
          <Text
            style={{
              color: "#1A6144",
              fontSize: verticalScale(18),
              fontFamily: "Lexend_500Medium",
            }}
          >
            10m/s
          </Text>
          <Text
            style={{
              color: "#123A2A",
              fontFamily: "Lexend_500Medium",
            }}
          >
            wind
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderRightWidth: verticalScale(2),
            borderRightColor: "#1A6144",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <HumidityLogo
              height={verticalScale(25)} width={verticalScale(25)} />
     
          </View>
          <Text
            style={{
              color: "#1A6144",
              fontSize: verticalScale(18),
              fontFamily: "Lexend_500Medium",
            }}
          >
            98%
          </Text>
          <Text
            style={{
              color: "#123A2A",
              fontFamily: "Lexend_500Medium",
            }}
          >
            humidity
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <RainLogo height={verticalScale(25)} width={verticalScale(25)} />
          </View>
          <Text
            style={{
              color: "#1A6144",
              fontSize: verticalScale(18),
              fontFamily: "Lexend_500Medium",
            }}
          >
            10%
          </Text>
          <Text
            style={{
              color: "#123A2A",
              fontFamily: "Lexend_500Medium",
            }}
          >
            rain
          </Text>
        </View>
      </View>
    </View>
  );
}
