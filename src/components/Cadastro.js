import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { useState } from "react";
import { app } from '../Config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Config/firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';

export default (props) => {

    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    
    function cadastrarusu() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("Cadastrou");
          setEmail('');
          setSenha('');
          props.navigation.navigate("Login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //menssagem de alerta
          alert(errorMessage);
          // ..
        });
    }
    function cadastrarusu(){
        //setDoc(doc(db, "contatos", "LA"), {
        //await addDoc(collection(db, "contatos"), {
        addDoc(collection(db, 'usuarios'), {
            nome: nome,
            telefone: telefone,
            cpf: cpf
          }).then(() => {
            alert("Cadastrado com sucesso");
            props.navigation.navigate("Login");
          }).catch((error) => {
            alert(error)
          })
          setCPF('');
          setNome('');
          setTelefone('');
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
                onPress={cadastrarusu}
            >
                <TextoBtn>Criar Conta</TextoBtn>
            </Botao>
            
        </Container>
    )
}