import { Image, View } from "react-native";

const Imagem = () => {
    return ( 
      <View>
        <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
      </View>
      )
}

export default Imagem