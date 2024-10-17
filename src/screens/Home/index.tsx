import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, Button } from "react-native";


export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button 
            title="Go to Login"
            onPress={() => navigation.navigate("Login")}/>
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
        fontSize: 24,
    backgroundColor: "#4d0092",
    }
})