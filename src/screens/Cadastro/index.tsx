import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'




export default function Cadastro() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" delay={100}>
            <Text style={styles.text}>Cadastro</Text>
            </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
            <Text style={styles.title}>Insira seu CPF</Text>
            <TextInput placeholder="insira seu CPF" style={styles.input}/> 

            <Text style={styles.title}>Insira seu email</Text>
            <TextInput placeholder="insira seu email" style={styles.input}/>

            <Text style={styles.title}>Repita seu email</Text>
            <TextInput placeholder="insira seu email" style={styles.input}/>

            <Text style={styles.title}>Insira sua senha</Text>
            <TextInput placeholder="insira seu email" style={styles.input}/>

            <Text style={styles.title}>Repita sua senha</Text>
            <TextInput placeholder="insira seu email" style={styles.input}/>


            <TouchableOpacity style={styles.button}
                            onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#38a69d',
        flex: 1,
    },
    text:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
        marginEnd: 10,

    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 3,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        color: 'black',
        fontWeight: 'bold',
    },
    input:{
        borderBottomWidth: 1,
        height: 45,
        marginBottom: 5,
        fontSize: 20,
        color: '#a1a1a1'
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 8,
        fontSize: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    }
})