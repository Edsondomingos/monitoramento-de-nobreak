import * as React from "react";
import { Container,Botao, TextoBtn, MiniContainer } from "../../assets/styledComponents/Components";
import { db } from '../Config/firebaseconfig';
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

export default (props) => {

  const [time, setTime] = useState('');

    function desconectar() {
      const auth = getAuth(db);
      signOut(auth).then(() => {
        // Sign-out successful.
        alert('Desconectado')
      }).catch((error) => {
        // An error happened.
        alert(error);
      });
    }

    function verificar(){
      const auth = getAuth(db);
      if(auth.currentUser){
        alert(auth.currentUser.email);
      }else{
      alert('Não tem nenhum uruário autenticado');
      }
    }

  return (
    <Container >
      <MiniContainer  style={{flexDirection:"row"}}>
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
        <Botao onPress={() =>{ props.navigation.navigate("Login"); }} >
          <TextoBtn>Login</TextoBtn>
        </Botao>
        <Botao onPress={() => props.navigation.navigate("Login", {desconectar})} >
          <TextoBtn>Desconectar</TextoBtn>
        </Botao>
        <Botao onPress={verificar} >
          <TextoBtn>Verificar Autenticação</TextoBtn>
        </Botao>
      {/*<Button color={'#00FF99'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro de Nobreak" onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} />*/}
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} /> keyboardType='number-pad' */}
    </Container>
  )
}
