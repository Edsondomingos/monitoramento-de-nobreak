import * as React from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'

export default function Login(props){
    return (
        <View  style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite seu email'

            />
            <TextInput 
                style={styles.input}
                placeholder='Digite sua senha'
                secureTextEntry={true}
            />
            <TouchableHighlight
                style={styles.botao}
            >
                <Text  style={styles.texto}>Entrar</Text>

            </TouchableHighlight>
            <Text style={styles.textoLink} onPress={() => props.navigation.navigate('Cadastro')}>Criar uma conta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },  
    titulo:{
        fontSize: 30,
        textAlign: 'center',
    },
    input: {
        outline: 0,
        height: 30,
        width: 250, 
        borderWidth: 1,
        margin: 'auto',
        marginVertical: 10, 
        borderRadius: 5,
        padding: 5, 
    },
    botao:{
        width: 250,
        height: 30,
        backgroundColor: '#55f',
        borderRadius: 7,
        margin: 'auto',
        marginVertical: 15, 
    },
    texto:{
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        margin: 'auto'
    },
    textoLink:{
        fontSize: 22,
        textDecorationLine: 'underline',
        margin: 'auto',
    },
})