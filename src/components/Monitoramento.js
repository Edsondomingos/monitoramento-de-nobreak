import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Container, Titulo, TextoComum, Botao, Circulo } from '../../assets/styledComponents/Components'
import Styles from '../../assets/css/Estilos'

export default function Monitoramento() {

  const [liga, setLigar] = useState(false);
  const [nome, setNome] = useState('Nome do Nobreak')
  const [nivel, setNivel] = useState(50)

  function switchLigar() {
    setLigar(!liga);
  }

  return (
    <Container style={Styles.container}>
      
  
      <Titulo>{nome}</Titulo>  
      
      <Circulo>
        <TextoComum>Uso de Energia</TextoComum>
      </Circulo>

      <View>
        <Text style={Styles.titulo}>Nivel de bateria</Text>
        <Circulo>      
          <Text style={Styles.textoNivel}>{nivel}%</Text>
        </Circulo>
      </View>

      <Circulo>
        <Botao 
            style={liga ? Styles.botao : Styles.botaoD}
            onPress={switchLigar}
          >
          <TextoComum>{liga ? 'LIGADO' : 'DESLIGADO'}</TextoComum>
        </Botao>
      </Circulo>
    
     
    </Container>
  );
}
