import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import TelaLogin from './screens/log';


const Stack = createNativeStackNavigator();


const Screen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}/>
        <Stack.Screen name="Login" component={TelaLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  };    
export default Screen;