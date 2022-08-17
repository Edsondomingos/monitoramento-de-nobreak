import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { useState } from "react";
import { app } from '../Config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    function cadastrar() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("Cadastrou");
          setEmail('');
          setSenha('');
          props.navigation.navigate("Login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //menssagem de alerta
          alert(errorMessage);
          // ..
        });
    }

    return (
        <Container>
            <ImageBackground 
            source={require('../../img/iot.jpg')} 
            style={{width: 100, height: 100}} ></ImageBackground>
            <Titulo>Cadastro de Usuário</Titulo>
            <Entrada 
                placeholder='Nome completo' 

            />
            <Entrada 
               value={email} placeholder='Digite seu email' onChangeText={setEmail}

            />
            <Entrada 
               value={senha} placeholder='Digite sua senha' onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Botao
                testID='btnCriar'
                onPress={cadastrar}
            >
                <TextoBtn>Criar Conta</TextoBtn>
            </Botao>
            
        </Container>
    )
}