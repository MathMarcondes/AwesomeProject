import * as React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';



export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#3869D" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  )
}