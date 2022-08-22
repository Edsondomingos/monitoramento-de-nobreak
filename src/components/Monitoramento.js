import * as React from 'react';
import { useState } from 'react';
import { Container, Titulo, TextoComum, Botao, Circulo, LigaDesliga, TextoBtn } from '../../assets/styledComponents/Components'
import MQTT from './TesteMQTT'

export default function Monitoramento(props) {

  const [liga, setLigar] = useState(false);
  const [nome, setNome] = useState('Nome do Nobreak')
  const [nivel, setNivel] = useState(50)
 
  function switchLigar() {
    setLigar(!liga);
  }

  return (
    <Container>
      
  
      <Titulo>{nome}</Titulo>  
      
      <Circulo>
        <TextoComum>Uso de Energia</TextoComum>
      </Circulo>
      
      
      <Circulo> 
        <TextoComum>Bateria</TextoComum>     
        <TextoComum><MQTT /></TextoComum>
      </Circulo>

      <Circulo>
        <LigaDesliga 
            testID='btnLigar'
            style={liga ? {backgroundColor: '#7f7'} : {backgroundColor: '#f33'}}
            onPress={switchLigar}
          >
          <TextoComum
          
          >{liga ? 'LIGADO' : 'DESLIGADO'}</TextoComum>
        </LigaDesliga>
      </Circulo>
      <Botao
        onPress={() => props.navigation.navigate('EditarNobreak')}
      >
        <TextoBtn>Editar nobreak</TextoBtn>
      </Botao>
     
    </Container>
  );
}
