import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Pages/Main';
import Login from './Pages/Login';

export default function App (){
    const Stack  = createNativeStackNavigator()
return <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" options={{
                headerShown: false
            }} component={Login} />
            <Stack.Screen name='Main' options={{
                headerTitle:"",
                headerBackground: () => (
                    <View style={{backgroundColor: '#C5F5D6', height: 100}} />
                ),
            }} component={Main} />
        </Stack.Navigator>

</NavigationContainer>
}