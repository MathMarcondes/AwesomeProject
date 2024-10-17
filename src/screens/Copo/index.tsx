import { useState } from "react";
import { TextInput, Text, View, Button, StyleSheet } from "react-native";
import React from "react";

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


export default Copo