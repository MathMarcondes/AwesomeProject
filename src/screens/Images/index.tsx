import { Image } from "react-native";

const Imagem = () => {
    return ( 
        <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 100}}
      />)
}

export default Imagem