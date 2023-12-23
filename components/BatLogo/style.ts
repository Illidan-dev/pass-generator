import { StyleSheet } from "react-native";


const style = StyleSheet.create({

    logoContainer: {
        flexDirection: "column",
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',   
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#4d4d4d'
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#E5BF3C'
    },

    image: {
        resizeMode: 'contain',
        height: 180,
    }
});

export default style;