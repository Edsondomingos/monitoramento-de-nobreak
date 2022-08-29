import React, { useState, useEffect } from "react";
import { Button, View, Text, FlatList, TextInput, ImageBackground, Image } from "react-native";
import { Container, Titulo, Botao, TextoBtn, MiniContainer, BotaoIcone, Icone, TextoComum } from "../../assets/styledComponents/Components";
import firebase from "../Config/firebaseconfig";
// import { app } from '../Config/firebaseconfig';
//import { doc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
//import { getAuth, signOut } from "firebase/auth"

export default (props) => {

  // const [codigo, setCodigo] = useState('')
  // const [mac, setMac] = useState('')
  const [nobreak, setNobreak] = useState([{}])
  const [usuario, setUsuario] = useState("");
  //const [idContato, setIdContato] = useState('')

  const database = firebase.firestore();

  
  useEffect(() => {
    //const q = query(citiesRef, where("desciption", "==", props.route.params.Evento));
      database.collection("nobreaks").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setNobreak(list);
      });
    }, []);

  const Logout = () => {
    firebase.auth().signOut().then(() => {
      props.navigation.navigate("Login")
    }).catch((error) => {
    });
  }


  return (
    <Container >
      <Titulo>Nobreaks Cadastrados</Titulo>
      <FlatList
        data={nobreak}
        renderItem={({ item }) =>
          <Botao
            onPress={() => props.navigation.navigate('Monitoramento', { cod: item.descricao })}
          >
            <TextoBtn>codigo: {item.descricao} - mac: {item.mac_esp}</TextoBtn>

          </Botao>

        }
      />
      <TextoComum>{usuario.descricao}</TextoComum>

      {/*<Container>
      <Botao onPress={() => { props.navigation.navigate("Monitoramento"); }}>
        <TextoBtn>Monitoramento</TextoBtn>
      </Botao>

       <Botao onPress={() => { props.navigation.navigate("Login"); }} > */}
      {/* <TextoBtn>Login</TextoBtn> 
      </Botao>
     {/* <Button title="Verificar Autenticação" onPress={verificar} 
      />   */}

      {/* <Text>{'\n\n\n\n\n\n\n'}</Text> */}


      {/*<Button color={'#00FF99'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro de Nobreak" onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} />*/}
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} /> keyboardType='number-pad' 
      </Container>*/}
      <MiniContainer>
        <BotaoIcone
          onPress={() => props.navigation.navigate('EditarPerfil')}
        >
          <Image source={require('../../img/user.png')} style={{ width: 50, height: 50 }} />
        </BotaoIcone>


        <BotaoIcone
          onPress={() => props.navigation.navigate('Cadastrar_Nobreak')}
        >
          <Image source={require('../../img/novo3.ico')} style={{ width: 50, height: 50 }} />
        </BotaoIcone>

        <BotaoIcone onPress={Logout} >
          <Image source={require('../../img/sair.png')} style={{ width: 50, height: 50 }} />
        </BotaoIcone>

      </MiniContainer>
    </Container>
  )
}
