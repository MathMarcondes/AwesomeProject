import { useState } from "react";
import { TextInput, Text, View, Button, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function Copo ({navigation}) {


    const [IsCheio, setIsCheio] = useState(true);
    const [text, onChangeText] = React.useState('Useless text')
    const [number, onChangeNumber] = React.useState('');
   

    return(
        
        <View>
            
            <View>
            <Image source={require('../../Images/Nubank.png')} style={styles.image}/>
            </View>


            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
             value={text}
            />
            
                   
            
            <Text style={{flex: 1, backgroundColor: 'purple'}}>
                Hello, I'm .Agora estou {IsCheio ? 'Vazio' : 'Está cheio'}!
            </Text>
            
            <Button
            onPress={() => {
                setIsCheio(false);
            }}
            disabled={!IsCheio}
            title={IsCheio ? 'Encha o copo, por favor' : 'Está cheio'}
            />
            <View>
            <Button
            title="Home" 
            onPress={() => navigation.navigate('Home')}
            color={'purple'}/>
            </View>
            <View>
            <Button
              title="Email"
              onPress={() => navigation.navigate('Login')}
              color={'blue'}/>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image:{
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Button: {
    alignItems: 'center'
  }
});


