import * as React from "react";
import { ImageBackground } from "react-native";
import { useState } from 'react';
import { Container, Titulo, Entrada, Botao, TextoBtn } from "../../assets/styledComponents/Components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/firebaseconfig";

export default (props) => {

  const [codigo, setCodigo] = useState('');
  const [mac, setMac] = useState('');

//   function cadastrarno(){
//     //setDoc(doc(db, "contatos", "LA"), {
//     //await addDoc(collection(db, "contatos"), {
//     addDoc(collection(db, 'nobreak'), {
//         codigo: codigo,
//         mac: mac,
//       }).then(() => {
//         alert("Cadastrado com sucesso");

//         props.navigation.navigate('Menu');
//       }).catch((error) => {
//         alert(error)
//       })

//       setCodigo('');
//       setMac('');
// }

  return (
    <Container>
      <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
      </ImageBackground>
      <Titulo>Cadastrar Nobreak</Titulo>
      <Entrada placeholder="Codigo/Modelo" onChangeText={setCodigo} />
      <Entrada placeholder="Endereço MAC" onChangeText={setMac} />
      
      <Botao testID='btn' onPress={cadastrarno} >
        <TextoBtn>Cadastrar</TextoBtn>
      </Botao>


    </Container>
  )
}