import { TextInput }  from "react-native";
import styles               from "./styles";

interface BatTextProps{
    password: string;
}

export function BatTextInput({password}: BatTextProps){
    return (
        <TextInput
            style={styles.inputer}
            placeholder="PASS"
            multiline={true}
            value={password}
            editable={false}
        />
    );
} 