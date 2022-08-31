import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada, TextoComum } from '../../assets/styledComponents/Components';
import { getDocs, deleteDoc, updateDoc, doc, collection } from "firebase/firestore";
import firebase from "../Config/firebaseconfig";
import { Button, View, Text, FlatList } from 'react-native';
import { useState } from 'react';

export default (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    const [msg, setMsg] = useState('Redefinir Senha')
    
    const database = firebase.firestore();

    function EditarUsuario(){
        database.collection('users').doc(props.route.params.id).update({
            cpf: cpf,
            name: nome,
            telefone: telefone
        })
        props.navigation.navigate('Menu',{email:props.route.params.email})
    }

    function mudaSenha(){
        firebase.auth().sendPasswordResetEmail(props.route.params.email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
            setMsg('Link enviado para o email')
    }

    return (
        <Container>
            <TextoComum>{props.route.params.email}</TextoComum>
            <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
            </ImageBackground>
            <Titulo>Editar Usuário</Titulo>
            <Entrada
                value={nome} placeholder='Nome completo' onChangeText={setNome}
            />
            <Entrada value={cpf} placeholder='Digite seu CPF' onChangeText={setCpf} />
            
            <Entrada
                value={telefone} placeholder='Digite o telefone' onChangeText={setTelefone}
            />

            <TextoComum
                onPress={mudaSenha}
            >{msg}</TextoComum>
            
            <Botao
                onPress={EditarUsuario}
            >
                <TextoBtn>Atualizar</TextoBtn>
            </Botao>
            
        </Container>
    )
}
