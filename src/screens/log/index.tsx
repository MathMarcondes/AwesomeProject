import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';



export default function TelaLogin ({ navigation }) {
const [IsLogado, setIsLogado] = useState(true);
const [text, onChangeText] = React.useState('');
const [number, onChangeNumber] = React.useState('');
    return (
        <SafeAreaView>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Insira seu email '
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Insira sua senha"
        keyboardType="numeric"
      />
      <Button title="Go to Copo" 
      onPress={() => navigation.navigate("Copo")}/>
    
      </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black',
    }
    
})
