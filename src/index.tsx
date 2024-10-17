import React from 'react';
import {Button, ScrollView, Text, View, Image, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';
import Email from './screens/Email';
import Imagem from './screens/Images';







const Copo = props => {
    const [IsCheio, setIsCheio] = useState(true);
    const [text, onChangeText] = React.useState('Useless text')
    const [number, onChangeNumber] = React.useState('');
    return(
        <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
             value={text}
            />
            <Text style={{flex: 1, backgroundColor: 'purple'}}>
                Hello, I'm {props.name} .Agora estou {IsCheio ? 'Vazio' : 'Está cheio'}!
            </Text>
            
            <Button
            onPress={() => {
                setIsCheio(false);
            }}
            disabled={!IsCheio}
            title={IsCheio ? 'Encha o copo, por favor' : 'Está cheio'}
            />
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
});



const Cafe = () => {
    return ( 
        <ScrollView>
        <Imagem/>
       
        <Email/>
        <Copo name="Spot" />
        </ScrollView>
    );
  };    
export default Cafe;