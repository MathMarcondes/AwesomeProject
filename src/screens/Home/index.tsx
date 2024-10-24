import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, Button, Image, ImageBackground } from "react-native";


export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            
            <View>
            <Image source={require('../../Images/logo-insta.png')} style={styles.image}/>
            </View>
            <Text style={styles.text}>Home Screen</Text>

            <Button 
            title="Go to Login"
            onPress={() => navigation.navigate("Login")}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
    fontSize: 30,
    backgroundColor: "#4d0092",
    },
    Button: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%'
    }
    
})