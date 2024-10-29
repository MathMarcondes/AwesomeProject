import * as React from 'react';
import { StatusBar } from 'react-native';
import Home from './screens/Home';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';



export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>        
      <Routes/>
      
    </NavigationContainer>
  )
}