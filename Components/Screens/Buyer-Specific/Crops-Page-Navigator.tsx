import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CropsMainScreen } from "./Crops-Main-Screen"
import { MoreCrops } from "./Buyer-Detail-Crops"
export function CropsNavigator(){
    const Stack = createNativeStackNavigator()
    return <Stack.Navigator screenOptions={{
        headerShown:false,
    }}>
        <Stack.Screen name="Crops" component={CropsMainScreen}/>
        <Stack.Screen name="Crops-Details" component={MoreCrops}/>
    </Stack.Navigator>
}