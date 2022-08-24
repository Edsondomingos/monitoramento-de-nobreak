import React, { useState } from "react";
import { Button, View, Text, FlatList, TextInput } from "react-native";
import { Container, Botao, TextoBtn, MiniContainer } from "../../assets/styledComponents/Components";
import { db } from '../Config/firebaseconfig';
import { app } from '../Config/firebaseconfig';
//import { useState } from "react";
import { doc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth"

export default (props) => {

  const [codigo, setCodigo] = useState('')
  const [mac, setMac] = useState('')
  const [nobreak, setNobreak] = useState([{}])
  const [idContato, setIdContato] = useState('')

  function desconectar() {
    const auth = getAuth(app);
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
    const auth = getAuth(app);
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
  }

  return (
    <Container >
      <MiniContainer style={{ flexDirection: "row" }}>
        <Botao onPress={() => { props.navigation.navigate("EditarPerfil"); }} >
          <TextoBtn>Editar Perfil</TextoBtn>
        </Botao>
        <Botao onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} >
         <TextoBtn>Cadastrar Nobreak</TextoBtn>
        
        </Botao>
      </MiniContainer>
      <Botao onPress={() => { props.navigation.navigate("Monitoramento"); }}>
        <TextoBtn>Monitoramento</TextoBtn>
      </Botao>
      {/* <Botao onPress={() => { props.navigation.navigate("Login"); }} > */}
        {/* <TextoBtn>Login</TextoBtn> 
      </Botao>
     {/* <Button title="Verificar Autenticação" onPress={verificar} 
      />   */}

      {/* <Text>{'\n\n\n\n\n\n\n'}</Text> */}

      <Botao onPress={desconectar} >
      <TextoBtn>Logout</TextoBtn>
      </Botao>
      {/*<Button color={'#00FF99'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro de Nobreak" onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} />*/}
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} /> keyboardType='number-pad' */}
    </Container>
  )
}
