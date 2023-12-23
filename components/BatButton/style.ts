import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    BatButton: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 3,
        elevation: 3,
        backgroundColor: 'black',
    },
    
    text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#e5bf3c'
    },

    disabled : {
        backgroundColor: '#333'
    },

    normal : {
        
    }
});

export default style;