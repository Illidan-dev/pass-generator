
import { Text, Pressable }      from "react-native";
import style                    from "./style";
import * as Clipboard           from 'expo-clipboard';
import { generateRandomPass } from "../../services/PasswordService";

interface BatButtonProps{
    password: string;
    setPassword: (value: string) => void;
}

export function BatButton({password, setPassword}:BatButtonProps){

    const createPassword = () =>  {
        const thePassword = generateRandomPass();
        setPassword(thePassword);
    }

    const copyForTransferArea = () => {

        if( !password.length ) return;

        Clipboard.setStringAsync(password);

        alert('Valor copiado com sucesso!');
    }

    const resetPassword = () => setPassword('');

    return (
        <>
            <Pressable
                style={style.BatButton}
                onPress={createPassword}
            >
                <Text style={style.text}>GENERATE</Text>
            </Pressable>

            <Pressable
                style={[style.BatButton, password.length <= 0 ? style.disabled : style.normal]}
                onPress={copyForTransferArea}
                disabled={password.length <= 0}
            >
                <Text style={style.text}>✅ COPY</Text>
            </Pressable>

            <Pressable
                style={[style.BatButton, password.length <= 0 && style.disabled ]}
                onPress={resetPassword}
                disabled={password.length <= 0}
            >
                <Text style={style.text}>Reset</Text>
            </Pressable>

        </>
        
    )
}