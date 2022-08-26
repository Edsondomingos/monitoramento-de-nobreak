import React, { useState } from "react";
import { Button, View, Text, FlatList, TextInput, ImageBackground, Image } from "react-native";
import { Container, Titulo, Botao, TextoBtn, MiniContainer, BotaoIcone, Icone } from "../../assets/styledComponents/Components";
import firebase from "../Config/firebaseconfig";
//import { app } from '../Config/firebaseconfig';
//import { doc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
//import { getAuth, signOut } from "firebase/auth"

// Ver quantidade de verificações
// let teste = []
// async function listar(){
//   const nobreakCol = collection(db, 'nobreak');
//   const nobreakSnapshot = await getDocs(nobreakCol);
//   const nobreakList = nobreakSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   teste = {nobreakList};
// }

// listar()

export default (props) => {

 // const [codigo, setCodigo] = useState('')
 // const [mac, setMac] = useState('')
  const [nobreak, setNobreak] = useState([{}])
  //const [idContato, setIdContato] = useState('')

const Logout = () => {
  firebase.auth().signOut().then(() => {
    props.navigation.navigate("Login")
  }).catch((error) => {
  });
}


  /*function desconectar() {
    const auth = getAuth(db);
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Desconectado!')
      props.navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  function verificar() {
    const auth = getAuth(db);
    if (auth.currentUser) {
      alert(auth.currentUser.email);
    } else {
      alert('Não tem nenhum usuário autenticado!');
    }
  }

  function atualizar() {
    updateDoc(doc(db, "nobreak", idContato), {
      codigo: codigo,
      mac: mac,
    }).then(() => {
      alert("Atualizado com sucesso!")
    }).catch((error) => {
      alert(error)
    })

    setCodigo('');
    setMac('');
    setIdContato('');
    listar();
  }*/

  return (
    <Container >
        <Titulo>Nobreaks Cadastrados</Titulo>
      <FlatList
          data={nobreak}
          renderItem={({item}) =>
          <Botao
            onPress={() => props.navigation.navigate('Monitoramento',{cod: item.codigo})}
          >
              <TextoBtn>codigo: {item.codigo} - mac: {item.mac}</TextoBtn>
              
          </Botao>
      }
      />
      
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
