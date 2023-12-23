import { Image, Text, View } from "react-native";
import style from "./style";

import batLogo from '../../assets/bat-logo.png';

export function BatLogo(){
    return (
        <View style={style.logoContainer}>
            <Text style={style.title}>bat pass generator</Text>
            <Image style={style.image} source={batLogo} />
        </View>
    )
}