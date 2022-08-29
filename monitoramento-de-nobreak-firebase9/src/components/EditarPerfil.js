import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { getDocs, deleteDoc, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../Config/firebaseconfig";
import { Button, View, Text, FlatList } from 'react-native';
import { useState } from 'react';

export default (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    // const [usuarios, setUsuario] = useState([{}])
    // const [idUsuarios, setIdUsuario] = useState('')

    const EditarUser = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                navigation.navigate("Menu")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    return (
        <Container>
            <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
            </ImageBackground>
            <Titulo>Editar Usuário</Titulo>
            <Entrada
                value={nome} placeholder='Nome completo' onChangeText={setNome}
            />
            <Entrada value={cpf} placeholder='Digite seu CPF' onChangeText={setCpf} />
            <Entrada
                value={email} placeholder='Digite seu email' onChangeText={setEmail}
            />
            <Entrada
                value={telefone} placeholder='Digite o telefone' onChangeText={setTelefone}
            />
            <Entrada
                value={senha} placeholder='Senha' onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Botao
                onPress={EditarUser}
            >
                <TextoBtn>Atualizar</TextoBtn>
            </Botao>
            
        </Container>
    )
}

/* <FlatList
    // de onde vem os dados
    data={usuarios}
    keyExtractor={item => item.id}
    renderItem={({ item }) =>
        <View>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
            {/*<Text>{item.email}</Text>
            <Text>{item.senha}</Text>*/
            // <Text>Celular: {item.telefone}</Text>

        //     <Button title='Editar' onPress={() => {
        //         setNome(item.nome);
        //         setCpf(item.cpf);
        //         setEmail(item.email);
        //         setSenha(item.senha);
        //         setTelefone(item.telefone);
        //         setIdUsuario(item.id);
        //     }} />
        //     <Button title='Deletar'  />
        // </View>
    // } />
