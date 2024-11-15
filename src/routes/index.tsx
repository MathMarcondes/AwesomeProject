import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/log";
import Cadastro from "../screens/Cadastro";



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
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>  
    )
}