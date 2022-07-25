import * as React from 'react';
import { useState } from 'react';
import { Container, Titulo, TextoComum, Botao, Circulo, LigaDesliga } from '../../assets/styledComponents/Components'

export default function Monitoramento() {

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
        <TextoComum>{nivel}%</TextoComum>
      </Circulo>

      <Circulo>
        <LigaDesliga 
            
            style={liga ? {backgroundColor: '#7f7'} : {backgroundColor: '#f33'}}
            onPress={switchLigar}
          >
          <TextoComum
          
          >{liga ? 'LIGADO' : 'DESLIGADO'}</TextoComum>
        </LigaDesliga>
      </Circulo>
    
     
    </Container>
  );
}
