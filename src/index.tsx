import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import TelaLogin from './screens/log';
import Copo from './screens/Copo';
import Email from './screens/Email';


const Stack = createNativeStackNavigator();


const Screen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} />
        <Stack.Screen name="Login" component={TelaLogin}
        options={{headerShown: false}} />
        <Stack.Screen name="Copo" component={Copo}
        options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  };    
export default Screen;