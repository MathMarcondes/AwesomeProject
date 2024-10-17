import React from 'react';
import {Button, ScrollView, Text, View, Image, TextInput, StyleSheet, ImageBackground} from 'react-native';
import { useState } from 'react';
import Email from './screens/Email';
import Imagem from './screens/Images';
import Copo from './screens/Copo';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};



const Cafe = () => {
    return ( 
        <View>
        <Imagem/>
        <Copo name="Spot" />
        <Email/>
        
        </View>
    );
  };    
export default Cafe;