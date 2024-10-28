import { PropsWithChildren } from "react";
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from "react-native";


export default function Home () {
    return(
        <View style={styles.container}>
            

            <View>
                <Image
                source={require('../../Images/logo.png')}
                style={{width: '100%'}}
                resizeMode="contain"/>
            </View>


            <View style={styles.container}>
                <Text>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {

    }
})