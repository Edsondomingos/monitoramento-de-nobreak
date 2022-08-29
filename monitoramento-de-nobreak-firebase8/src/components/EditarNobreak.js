import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { ImageBackground } from 'react-native';
import { Button, View, Text, FlatList, TextInput } from 'react-native';
import { doc, updateDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../Config/firebaseconfig";
import { useState } from 'react';

export default (props) => {

  const [codigo, setCodigo] = useState('')
  const [mac, setMac] = useState('')
  const [nobreak, setNobreak] = useState([{}])
  const [idNobreak, setIdNobreak] = useState('')

  // async function listar() {
  //   const nobreakCol = collection(db, 'nobreak');
  //   const nobreakSnapshot = await getDocs(nobreakCol);
  //   const nobreakList = nobreakSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //   setNobreak(nobreakList);
  // }
  // async function deletar(id_nobreak) {
  //   await deleteDoc(doc(db, "nobreak", id_nobreak));
  //   setCodigo('');
  //   setMac('');
  //   setIdNobreak('');
  //   listar();
  // }
  // function atualizar() {
  //   updateDoc(doc(db, 'nobreak', idNobreak), {
  //     codigo: codigo,
  //     mac: mac
  //   }).then(() => {
  //     alert("Editado");
  //     props.navigation.navigate('Monitoramento');
  //   }).catch((error) => {
  //     alert(error)
  //   })

  //   setCodigo('');
  //   setMac('');
  //   setIdNobreak('');
  //   listar();
  // }

  return (
    <Container>
      <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
      </ImageBackground>
      <Titulo>Editar Nobreak</Titulo>
      {/*<Entrada value={codigo} placeholder="Codigo/Modelo" onChangeText={setCodigo} />
            <Entrada value={mac} placeholder="Endereço MAC" onChangeText={setMac} />*/}
      <Entrada value={codigo} placeholder='Codigo' onChangeText={setCodigo} />
      <Entrada value={mac} placeholder='Mac' onChangeText={setMac} />

      <Botao testID='btn'  >
        <TextoBtn>Atualizar</TextoBtn>
      </Botao>
      <Text>{'\n\n\n\n\n'}</Text>
      {/*<Button title='Listar Dados' onPress={listar} />
      <Text>{'\n\n'}</Text>
      <Text>LISTA DE DADOS</Text>*/}
      <Text>{'\n'}</Text>
      <FlatList
        // de onde vem os dados
        data={nobreak}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.codigo}</Text>
            <Text>E-mail: {item.mac}</Text>
            <Button title='Editar' onPress={() => {
              setCodigo(item.codigo);
              setMac(item.mac);
              setIdNobreak(item.id);
            }} />
            <Button title='Deletar'  />
            <Text>{'\n'}</Text>
          </View>
        } />
    </Container>
  )
}

// onPress={() => {
//   deletar(item.id)
// }}

// onPress={atualizar}