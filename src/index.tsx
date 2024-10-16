import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { useState } from 'react';
import Email from './screens/Email';

const Copo = props => {
    const [IsCheio, setIsCheio] = useState(true);

    return(
        <View>
            <Text>
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



const Cafe = () => {
    return (
      <>
        <Copo/>
        <Copo name="Spot" />
        <Email/>
        
      </>
    );
  };    
export default Cafe;