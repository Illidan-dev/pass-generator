import { StatusBar }        from "expo-status-bar";
import { View }             from "react-native";
import styles               from "./style";
import { BatLogo }          from "../../components/BatLogo";
import { BatTextInput }     from "../../components/BatTextInput";
import { BatButton }        from "../../components/BatButton";
import { useState }         from "react";


export function Home(){
    
    const [password, setPassword] = useState('');

    const definePassword = ( value: string  ) => {
        setPassword(value);
    }


    return (
        <View style={styles.container}>

            <View style={{marginBottom: 60}}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatTextInput password={password} />
                <BatButton password={password} setPassword={definePassword} />
            </View>


            <StatusBar style="light" />

        </View>
    );
}



