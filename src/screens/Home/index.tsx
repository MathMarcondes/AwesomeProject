import { PropsWithChildren } from "react";
import { Text, View } from "react-native";

interface HomeProps extends PropsWithChildren {
    title: string;
}

export function Home({children, title}:HomeProps) {
    return (
        <View>
            {children}
            
        </View>
        
    )
}
