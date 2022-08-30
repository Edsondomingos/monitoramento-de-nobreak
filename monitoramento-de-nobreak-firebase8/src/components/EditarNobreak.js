import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { ImageBackground } from 'react-native';
import { Button, View, Text, FlatList, TextInput } from 'react-native';
import { doc, updateDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import firebase from "../Config/firebaseconfig";
import { useState } from 'react';

export default (props) => {

  const [codigo, setCodigo] = useState('')
  const [mac, setMac] = useState('')
  const [nobreak, setNobreak] = useState([{}])
  const [idNobreak, setIdNobreak] = useState('')

  const database = firebase.firestore()

  // var cityRef = database.collection('nobreaks').doc(props.route.params.id);

  // var setWithMerge = cityRef.set({
  //     descricao: codigo,
  //     mac_esp: mac
  // }, { merge: true });

  function EditarNobreak(){
    database.collection('nobreaks').doc(props.route.params.id).update({
      descricao: codigo,
      mac_esp:mac
    })
    props.navigation.navigate('Menu',{email:props.route.params.email})
  }

  return (
    <Container>
      <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
      </ImageBackground>
      <Titulo>Editar Nobreak</Titulo>
      {/*<Entrada value={codigo} placeholder="Codigo/Modelo" onChangeText={setCodigo} />
            <Entrada value={mac} placeholder="Endereço MAC" onChangeText={setMac} />*/}
      <Entrada value={codigo} placeholder='Codigo' onChangeText={setCodigo} />
      <Entrada value={mac} placeholder='Mac' onChangeText={setMac} />

      <Botao testID='btn'  onPress={EditarNobreak}>
        <TextoBtn>Atualizar</TextoBtn>
      </Botao>
      
    </Container>
  )
}
