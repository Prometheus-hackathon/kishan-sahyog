import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View , Text,TextInput} from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import { Buyer_Tab_Header } from "./Tab-Header";
import { CropSelection } from "./Crop-Page";
import HOMESvg from "../../../assets/custom/home.svg";
import ContactSVG from "../../../assets/custom/contact.svg";
import CartSVG from "../../../assets/custom/cart.svg";
export const BuyerScreenNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor:"#98E5FD",
        },
        tabBarActiveTintColor:"#2C5A68",
        tabBarLabelStyle:{
            fontSize:scale(12),
            fontWeight:"bold",
        }
      }} >
        <Tab.Screen
          name="Store"
          options={{
            header: Buyer_Tab_Header,
            tabBarIcon: (props) => {
                return <HOMESvg height={scale(20)} width={scale(20)} fill={props.color} />
            }
          }}
          component={CropSelection}
        />
        <Tab.Screen name="Contact" options={{
            tabBarIcon:(props=>{
                return <ContactSVG height={scale(20)} width={scale(20)} fill={props.color} />
            })
        }} component={CropSelection} />
        <Tab.Screen name="Cart" options={{
            tabBarIcon:(props)=>{
                return <CartSVG height={scale(20)} width={scale(20)} fill={props.color} />
            }
        }} component={CropSelection} />
      </Tab.Navigator>
    );
  };