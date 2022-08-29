import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { useState } from "react";
import { app } from '../Config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from '../Config/firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';

export default (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCPF] = useState('')
    const [senha, setSenha] = useState('')
    
    async function cadastrarUsuario() {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(database => {
                const uid = database.user.uid;
                const users = firebase.firestore().collection('users');
                users.doc(uid).set({
                    name: nome, email: email, telefone: telefone, cpf: cpf, senha: senha
                });
            });
        props.navigation.navigate("Login")
    }

    return (
        <Container>
            <ImageBackground 
            source={require('../../img/iot.jpg')} 
            style={{width: 100, height: 100}} ></ImageBackground>
            <Titulo>Cadastrar Usuário</Titulo>
            <Entrada 
               value={nome} placeholder='Nome completo' onChangeText={setNome}

            />
            <Entrada 
               value={email} placeholder='Digite seu email' onChangeText={setEmail}

            />
            <Entrada 
               value={telefone} placeholder='Digite seu telefone' onChangeText={setTelefone}
            />
            <Entrada value={cpf} placeholder='Digite seu CPF' onChangeText={setCPF} />
            <Entrada 
               value={senha} placeholder='Digite sua senha' onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Botao
                testID='btnCriar'
                onPress={cadastrarUsuario}
            >
                <TextoBtn>Criar Conta</TextoBtn>
            </Botao>
            
        </Container>
    )
}
