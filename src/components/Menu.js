import * as React from "react";
import { Button, View, Text, FlatList, TextInput } from "react-native";
import { Container, Botao, TextoBtn, MiniContainer } from "../../assets/styledComponents/Components";
import { db } from '../Config/firebaseconfig';
import { app } from '../Config/firebaseconfig';
import { useState } from "react";
import { doc, collection, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth"

export default (props) => {

  const [codigo, setCodigo] = useState('')
  const [mac, setMac] = useState('')
  const [nobreak, setNobreak] = useState([{}])
  const [idContato, setIdContato] = useState('')

  async function listar() {
    const nobreakCol = collection(db, 'nobreak');
    const nobreakSnapshot = await getDocs(nobreakCol);
    const nobreakList = nobreakSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNobreak(nobreakList);
  }
  async function remover(id_nobreak) {
    await deleteDoc(doc(db, "nobreak", id_nobreak));
    setCodigo('');
    setMac('');
    setIdContato('');
    listar();
  }

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
      alert('Não tem nenhum uruário autenticado!');
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
        <Botao onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }}>
          <TextoBtn>Cadastrar</TextoBtn>
        </Botao>
      </MiniContainer>
      <Botao onPress={() => { props.navigation.navigate("Monitoramento"); }}>
        <TextoBtn>Monitoramento</TextoBtn>
      </Botao>
      <Botao onPress={() => { props.navigation.navigate("Login"); }} >
        <TextoBtn>Login</TextoBtn>
      </Botao>
      <Botao onPress={verificar} >
        <TextoBtn>Verificar Autenticação</TextoBtn>
      </Botao>
      <Button title='Listar Nobreaks' onPress={listar} />
      <Text>{'\n\n'}</Text>
      <Text>LISTA DE CONTATOS</Text>
      <TextInput value={codigo} placeholder='Codigo' onChangeText={setCodigo} />
      <TextInput value={mac} placeholder='Mac' onChangeText={setMac} />
      <Button title='Atualizar' onPress={atualizar}/>
      <Text>{'\n'}</Text>
      <FlatList
        // de onde vem os dados
        data={nobreak}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View>
            <Text>Nobreak {item.id}</Text>
            <Text>Nome: {item.codigo}</Text>
            <Text>E-mail: {item.mac}</Text>
            <Button title='Editar' onPress={() => {
              setCodigo(item.codigo);
              setMac(item.mac);
              setIdContato(item.id);
            }} />
            <Button title='Remover' onPress={() => {
              remover(item.id)
            }} />
            <Text>{'\n'}</Text>
          </View>
        } />
      <Botao onPress={desconectar} >
        <TextoBtn>Logout</TextoBtn>
      </Botao>
      {/*<Button color={'#00FF99'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro de Nobreak" onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} />*/}
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} /> keyboardType='number-pad' */}
    </Container>
  )
}
