import * as React from 'react'
import {ImageBackground} from 'react-native'
import { useState } from 'react';
import { Container, Titulo, TextoBtn, TextoComum, Botao, Entrada } from '../../assets/styledComponents/Components'
import { app } from '../Config/firebaseconfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    /*const entrar = () => {
        console.log('Entrou');
        console.log(email);
        console.log(senha);
      }*/

    function autenticar() {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            alert('Autenticou!');
            props.navigation.navigate("Menu")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //menssagem de alerta
            alert(errorMessage)
          });
      }    

    return (
        <Container>
            <ImageBackground 
            source={require('../../img/iot.jpg')} 
            style={{width: 100, height: 100}} ></ImageBackground>
            <Titulo>Login</Titulo>
            
            <Entrada 
                placeholder='Digite seu email' onChangeText={setEmail}
            />
            <Entrada 
                placeholder='Digite sua senha' onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Botao
                testID='btnEntrar'
                onPress={autenticar}
            >
                <TextoBtn>Entrar</TextoBtn>

            </Botao>
            <TextoComum testID='btnCriar' onPress={() => props.navigation.navigate('Cadastro')}>Criar uma conta</TextoComum>
            
        </Container>
    )
}
