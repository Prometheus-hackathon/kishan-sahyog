import { View, Text, Switch, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import SunLogo from "../assets/custom/sun.svg";
import RainLogo from "../assets/custom/rain.svg";
import WindLogo from "../assets/custom/wind.svg";
import HumidityLogo from "../assets/custom/humidity.svg";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";
import { useState } from "react";
import CloudSVG from "../assets/custom/weather_pattern/cloud.svg";
import StormSVG from "../assets/custom/weather_pattern/storm.svg";
import SunSVG from "../assets/custom/weather_pattern/sun.svg";

function WeatherBox({time}:{time:number}){
  let [fontsLoaded] = useFonts({
    Lexend_500Medium,
  });
  // random number based on time props
  const [random , setRandom] = useState(Math.floor(Math.random() * 3))
  return <View
  style={{
    height: "100%",
    width: scale(80),
    marginLeft: scale(10),
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Text
              style={{
                color: "#1A6144",
                fontSize: verticalScale(18),
                fontFamily: "Lexend_500Medium",
              }}
            >
             {time} AM
            </Text>
  {/* <Text style={{textAlign:'center' ,fontFamily:"Lexend_500Medium"}}>{time} AM</Text> */}
<View>
{random == 0 ? <CloudSVG height={verticalScale(25)} width={scale(25)} /> : null}
{random == 1 ? <StormSVG height={verticalScale(25)} width={scale(25)} /> : null}
{random == 2 ? <SunSVG height={verticalScale(25)} width={scale(25)} /> : null}
            </View>

        
           
            <Text
              style={{
                color: "#123A2A",
                fontFamily: "Lexend_500Medium",
                fontSize: verticalScale(18),
              }}
            >
              23°
            </Text>
</View>
}

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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        thumbColor={isEnabled ? "#1A6144" : "#70CBA6"}
        trackColor={{
          false: "#E3FFED",
          true: "#E3FFED",
        }}
      />
      {!isEnabled ? (
        <View
          style={{
            // marginTop: verticalScale(15),
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
                height={verticalScale(25)}
                width={verticalScale(25)}
              />
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
      ) : (
        <>
          <ScrollView
          // alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
            horizontal
            style={{
              backgroundColor: "#E3FFED",
              width: "100%",
              height: verticalScale(80),
              borderRadius: verticalScale(10),
              borderWidth: verticalScale(2),
              borderColor: "#1A6144",
              flexDirection: "row",
            }}
          >
            {[12 , 1, 2, 3, 4, 5,6,7,8].map((item,index)=>< WeatherBox key={index} time={item} />)}
          </ScrollView>
        </>
      )}
    </View>
  );
}
