import * as React from "react";
import { ImageBackground } from "react-native";
import { useState } from 'react';
import { Container, Titulo, Entrada, Botao, TextoBtn } from "../../assets/styledComponents/Components";
import { addDoc, collection } from "firebase/firestore";
import firebase from "../Config/firebaseconfig";

export default (props) => {

  const [codigo, setCodigo] = useState('');
  const [mac, setMac] = useState('');

  const database = firebase.firestore();

  function addNobreak(){
    database.collection('nobreaks').add({
      descricao: codigo,
      mac_esp: mac
    })
    props.navigation.navigate("Menu");
  }

  return (
    <Container>
      <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
      </ImageBackground>
      <Titulo>Cadastrar Nobreak</Titulo>
      <Entrada placeholder="Codigo/Modelo" onChangeText={setCodigo} />
      <Entrada placeholder="Endereço MAC" onChangeText={setMac} />
      
      <Botao testID='btn' onPress={addNobreak}>
        <TextoBtn>Cadastrar</TextoBtn>
      </Botao>


    </Container>
  )
}
