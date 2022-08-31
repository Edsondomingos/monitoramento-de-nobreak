import * as React from 'react'
import {Alert, ImageBackground} from 'react-native'
import { useState } from 'react';
import { Container, Titulo, TextoBtn, TextoComum, Botao, Entrada } from '../../assets/styledComponents/Components'
import firebase from '../Config/firebaseconfig';

export default (props) => {

    const [email, setEmail] = useState('oziele@email.com');
    const [senha, setSenha] = useState('123456');

    const loginFirebase = ()=>{
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                let user = userCredential.user;
                props.navigation.navigate("Menu", {idUser: user.uid, email: email})
            })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorCode)
            });
    }   

    return (
        <Container>
            <ImageBackground 
            source={require('../../img/iot.jpg')} 
            style={{width: 100, height: 100}} ></ImageBackground>
            <Titulo>Login</Titulo>
            
            <Entrada 
                placeholder='Digite seu email'
                onChangeText={setEmail}
                value={email}
            />
            <Entrada 
                placeholder='Digite sua senha' 
                onChangeText={setSenha}
                secureTextEntry={true}
                value={senha}
            />
            <Botao
                testID='btnEntrar'
                onPress={loginFirebase}
            >
                <TextoBtn>Entrar</TextoBtn>

            </Botao>
            <TextoComum testID='btnCriar' onPress={() => props.navigation.navigate('Cadastro')}>Criar uma conta</TextoComum>
            
        </Container>
    )
}
