import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components';
import { useState } from "react";
import { app } from '../Config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Config/firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';
//import * as yup from "yup";

export default (props) => {

/*  const login = (values) => console.log(values);

  const validarlogin = yup .object().shape({
    email: yup.string().email().required(),
    senha: yup.string().min(8).required(),
  }); */

    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    
    // function cadastrarusu() {
    //   const auth = getAuth(db);
    //   createUserWithEmailAndPassword(auth, email, senha)
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       //alert("Cadastrou");
    //       setEmail('');
    //       setSenha('');
    //       alert("Cadastrado com sucesso");
    //       props.navigation.navigate("Login");
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       //menssagem de alerta
    //       alert(errorMessage);
    //       // ..
    //     });
    //     //setDoc(doc(db, "contatos", "LA"), {
    //     //await addDoc(collection(db, "contatos"), {
    //     addDoc(collection(db, 'usuarios'), {
    //         nome: nome,
    //         senha: senha,
    //         email: email,
    //         telefone: telefone,
    //         cpf: cpf
    //       }).then(() => {
    //         //alert("Cadastrado com sucesso");
    //         //props.navigation.navigate("Login");
    //       });
    //       //setEmail('');
    //       //setSenha('');
    //       //setCPF('');
    //       //setNome('');
    //       //setTelefone('');
    // }

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