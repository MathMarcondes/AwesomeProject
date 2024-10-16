import React from "react-native";
import { TextInput, View, Text, Button } from "react-native";
import { useState } from "react";



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
            />
        </View>
    )
}


export default Email;
