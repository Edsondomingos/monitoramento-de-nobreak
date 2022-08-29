import * as React from 'react';
import { useState } from 'react';
import { Container, Titulo, TextoComum, Botao, Circulo, LigaDesliga, TextoBtn } from '../../assets/styledComponents/Components'
import { App} from './TesteMQTT'

export default function Monitoramento(props) {

  const [liga, setLigar] = useState(false);
  const [nome, setNome] = useState('Nome do Nobreak')
 
  
//{props.route.params.cod}
  return (
    <Container>
      
  
      <Titulo>{props.route.params.cod}</Titulo>

      <App />     

      
      <Botao
        onPress={() => props.navigation.navigate('EditarNobreak')}
      >
        <TextoBtn>Editar nobreak</TextoBtn>
      </Botao>
     
    </Container>
  );
}
