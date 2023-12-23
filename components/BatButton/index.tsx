
import { Text, Pressable }      from "react-native";
import style                    from "./style";
import * as Clipboard           from 'expo-clipboard';

interface BatButtonProps{
    password: string;
    setPassword: (value: string) => void;
}

export function BatButton({password, setPassword}:BatButtonProps){

    const generateRandomPass = () =>  {
        const all_leters:string             = 'abcdefghij';
        const all_leters_uppercase:string   = all_leters.toLocaleUpperCase();
        const all_numbers:string            = '123456789';
        const all_symbols:string            = '!@#$%¨&*()_';
        const all_in_one:string             = [all_leters, all_leters_uppercase, all_numbers, all_symbols].join('');
        let defined:string                  = '';

        for( let i = 0; i <= 8; i++ ){
            const randomIndex = Math.floor(Math.random() * all_in_one.length)
            defined += all_in_one.charAt(randomIndex);
        }

        // const randomString          = Math.random().toString(36).slice(-8);
        setPassword(defined);
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
                onPress={generateRandomPass}
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