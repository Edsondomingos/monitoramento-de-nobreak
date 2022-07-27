import * as React from "react";
import { ImageBackground } from "react-native";
import { Container, Titulo, Entrada, Botao, TextoBtn } from "../../assets/styledComponents/Components";

export default (props) => {
  return (
    <Container>
      <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
      </ImageBackground>
      <Titulo>Cadastrar Nobreak</Titulo>
      <Entrada placeholder="Codigo/Modelo" />
      <Entrada placeholder="Endereço MAC" />
      <Botao testID='btn5' onPress={() => props.navigation.navigate('Menu')} >
        <TextoBtn>Cadastrar</TextoBtn>
      </Botao>


    </Container>
  )
}