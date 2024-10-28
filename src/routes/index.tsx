import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/log";



const Stack = createNativeStackNavigator();


export default function Routes() {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator>  
    )
}