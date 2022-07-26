import * as React from "react";
import { Container,Botao, TextoBtn, MiniContainer } from "../../assets/styledComponents/Components";

export default (props) => {
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
      {/*<Button color={'#00FF99'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro de Nobreak" onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} />*/}
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} /> keyboardType='number-pad' */}
    </Container>
  )
}
