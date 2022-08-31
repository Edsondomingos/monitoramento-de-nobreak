import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, FlatList, TextInput, ImageBackground, Image } from "react-native";
import { Container, Titulo, Botao, TextoBtn, MiniContainer, BotaoIcone, Icone, TextoComum, BotaoNobreak } from "../../assets/styledComponents/Components";
import firebase from "../Config/firebaseconfig";

export default (props) => {


  const [nobreak, setNobreak] = useState([{}])
  const [usuario, setUsuario] = useState("")

  const database = firebase.firestore();

  const email = props.route.params.email ? props.route.params.email : 'Sem email'
  
  useEffect(() => {
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
      <TextoComum>{email}</TextoComum>
      <Titulo>Nobreaks Cadastrados</Titulo>
      
      <FlatList
        data={nobreak}
        renderItem={({ item }) =>
        <ScrollView>
          <BotaoNobreak
            onPress={() => props.navigation.navigate('Monitoramento', { cod: item.descricao, id: item.id })}
          >
            <TextoBtn>nobreak: {item.descricao + '\n'}mac: {item.mac_esp}</TextoBtn>

          </BotaoNobreak>
          </ScrollView>
        }
      />
      
      
      <MiniContainer>
        <BotaoIcone
          onPress={() => props.navigation.navigate('EditarPerfil', {id: props.route.params.idUser, email: props.route.params.email})}
        >
          <Image source={require('../../img/user.png')} style={{ width: 50, height: 50 }} />
        </BotaoIcone>


        <BotaoIcone
          onPress={() => props.navigation.navigate('Cadastrar_Nobreak',{email:props.route.params.email})}
        >
          <Image source={require('../../img/novo3.png')} style={{ width: 50, height: 50 }} />
        </BotaoIcone>

        <BotaoIcone onPress={Logout} >
          <Image source={require('../../img/sair.png')} style={{ width: 50, height: 50 }} />
        </BotaoIcone>

      </MiniContainer>
    </Container>
  )
}
