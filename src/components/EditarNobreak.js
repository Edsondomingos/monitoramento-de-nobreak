import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { ImageBackground } from 'react-native';
import { doc, updateDoc } from "firebase-auth";
import { db } from "../Config/firebaseconfig";
import { useState } from 'react';

export default () => {

    const [codigo, setCodigo] = useState('');
    const [mac, setMac] = useState('');

    function atualizar(){
        updateDoc(doc(db, 'nobreak'), {
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
        listar();
    }

    return (
        <Container>
            <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
            </ImageBackground>
            <Titulo>Editar Nobreak</Titulo>
            <Entrada placeholder="Codigo/Modelo" />
            <Entrada placeholder="Endereço MAC" />
            <Botao testID='btn' onPress={atualizar} >
                <TextoBtn>Editar Nobreak</TextoBtn>
            </Botao>

            {/*<Button title='Listar' onPress={listar}/>
            <Text>{'\n\n'}</Text>
            <Text>LISTA DE CONTATOS</Text>
            <Text>{'\n'}</Text>
            <FlatList 
                // de onde vem os dados
                data={contatos}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View>
                    <Text>Contato {item.id}</Text>
                    <Text>Nome: {item.nome}</Text>
                    <Text>E-mail: {item.email}</Text>
                    <Text>Telefone: {item.telefone}</Text>
                    <Button title='Editar' onPress={()=>{
                        setNome(item.nome);
                        setEmail(item.email);
                        setTelefone(item.telefone);
                        setIdContato(item.id);
                    }}/>
                    <Button title='Remover' onPress={()=>{
                        remover(item.id)
                    }}/>
                    <Text>{'\n'}</Text>
                </View>
                }/>*/}
        </Container>
    )
}