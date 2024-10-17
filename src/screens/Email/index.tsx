import React from "react-native";
import { TextInput, View, Text, Button } from "react-native"; import { useState } from "react";
import { Alert } from "react-native";



const Email = () => {
    const [IsLogado, setIsLogado] = useState(true);

    return (
        <View>
            <Text>
                Insira seu email:
                <TextInput>
                    Digite aqui seu email:
                </TextInput>
            </Text>
            <Button
            onPress={() => {
                setIsLogado(false);
            }}
            disabled={!IsLogado}
            title={IsLogado ? 'Logar' : 'Está logado'}
            color={'#841584'}
            />
            <View style={{ padding: 10, backgroundColor: 'blue' }}>
            <Text onPress={() => Alert.alert('Hello')}>Press Me</Text>
        </View>
        </View>
    )
}


export default Email;
