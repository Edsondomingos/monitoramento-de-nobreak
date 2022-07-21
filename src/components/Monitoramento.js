import * as React from 'react';
import { useState } from 'react';
import { Text, View, Stylesheet, TouchableHighlight, ScrollView } from 'react-native';
import Styles from '../assets/Estilos'

export default function Bateria() {

  const [liga, setLigar] = useState(false);
  const [nome, setNome] = useState('Nome do Nobreak')
  const [nivel, setNivel] = useState(50)

  function switchLigar() {
    setLigar(!liga);
  }

  return (
    <ScrollView style={Styles.container}>
  
      <Text style={Styles.titulo}>{nome}</Text>  
      
      <View style={Styles.opcao}>
        <Text style={Styles.titulo}>Uso de Energia</Text>
      </View>

      <View style={Styles.opcao}>
        <Text style={Styles.titulo}>Nivel de bateria</Text>
        <View style={Styles.bateria}>      
          <Text style={Styles.textoNivel}>{nivel}%</Text>
        </View>
      </View>

      <View style={Styles.opcao}>
        <TouchableHighlight 
            style={liga ? Styles.botao : Styles.botaoD}
            onPress={switchLigar}
          >
          <Text style={Styles.txtBt}>{liga ? 'LIGADO' : 'DESLIGADO'}</Text>
        </TouchableHighlight>
      </View>
    

    </ScrollView>
  );
}
