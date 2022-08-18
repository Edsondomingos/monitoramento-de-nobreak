import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { ImageBackground } from 'react-native';
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Config/firebaseconfig";
import { useState } from 'react';

export default () => {

    const [codigo, setCodigo] = useState('')
    const [mac, setMac] = useState('')
    const [nobreak, setNobreak] = useState([{}])
    const [idNobreak, setIdNobreak] = useState('')
  
    async function listar() {
      const nobreakCol = collection(db, 'nobreak');
      const nobreakSnapshot = await getDocs(nobreakCol);
      const nobreakList = nobreakSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNobreak(nobreakList);
    }

    function atualizar(){
        updateDoc(doc(db, 'nobreak', idNobreak), {
            codigo: codigo,
            mac: mac
          }).then(() => {
            //alert("Editado");
            //props.navigation.navigate('Monitoramento');
          }).catch((error) => {
            alert(error)
          })

        setCodigo('');
        setMac('');
        setIdNobreak('');
        listar();
    }

    return (
        <Container>
            <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
            </ImageBackground>
            <Titulo>Editar Nobreak</Titulo>
            {/*<Entrada value={codigo} placeholder="Codigo/Modelo" onChangeText={setCodigo} />
            <Entrada value={mac} placeholder="Endereço MAC" onChangeText={setMac} />*/}
            <TextInput value={codigo} placeholder='Nome' onChangeText={setCodigo} />
            <TextInput value={mac} placeholder='E-mail' onChangeText={setMac}/>
            
            <Botao testID='btn' onPress={atualizar} >
                <TextoBtn>Editar Nobreak</TextoBtn>
            </Botao>
            <Button title='Listar' onPress={listar} />
      <Text>{'\n\n'}</Text>
      <Text>LISTA DE CONTATOS</Text>
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
              setIdNobreak(item.id);
            }} />
            <Button title='Remover' onPress={() => {
              remover(item.id)
            }} />
            <Text>{'\n'}</Text>
          </View>
        } />
        </Container>
    )
}