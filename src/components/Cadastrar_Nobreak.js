import * as React from "react";
import { ImageBackground } from "react-native";
//import { Text, View, TextInput, Button } from "react-native";
import { Container, Titulo, Entrada, Botao, TextoBtn } from "../../assets/styledComponents/Components";
import { useState } from "react";
import { app } from '../Config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default () => {

  const [codigo, setCodigo] = useState('')
  const [mac, setMac] = useState('')
  
  function cadastro() {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, codigo, mac)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Cadastrou");
        setCodigo('');
        setMac('');
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
      <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
      </ImageBackground>
      <Titulo>Cadastrar Nobreak</Titulo>
      <Entrada placeholder="Codigo/Modelo" onChangeText={setCodigo} />
      <Entrada placeholder="Endereço MAC" onChangeText={setMac} />
      
      <Botao testID='btn' onPress={cadastro} >
        <TextoBtn>Cadastrar</TextoBtn>
      </Botao>


    </Container>
  )
}