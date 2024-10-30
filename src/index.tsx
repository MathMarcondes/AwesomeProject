import * as React from 'react';
import { StatusBar } from 'react-native';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';



export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>        
      <Routes/>

      
    </NavigationContainer>
  )
}