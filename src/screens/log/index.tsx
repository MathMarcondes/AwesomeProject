
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'


export default function Login  () {

    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInIt" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo(a)</Text>
        </Animatable.View>
      
      
        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput
              placeholder="Digite seu email"
              style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
              placeholder="Digite sua senha"
              style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.button}>
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>

        </Animatable.View>
      
      
      </View>
    )
}
 
const styles = StyleSheet.create({
      container:{
        flex: 2,
        backgroundColor: '#38a69d',
      },
      containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
      },
      message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
      },
      containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25, 
      },
      title:{
        fontSize: 20,
        margin: 28,
      },
      input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
      },
      button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignContent: 'center'
      },
      buttonText:{
        color: '#FFF',
        fontSize: 11,
        fontWeight: 'bold'
      },
      buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
      },
      registerText: {
        color: '#a1a1a1'
      }
      
    
})
