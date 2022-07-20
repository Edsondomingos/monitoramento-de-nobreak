import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Bateria(props) {

  const [nivel, setNivel] = useState()

  function pegaNivelBateria(){
    
  }

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Nível de Bateria</Text>
      <View style={styles.bateria}>
        <Text style={styles.textoNivel}>{nivel}%</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    fontSize: 30,
    marginHorizontal: 'auto',
  },
  bateria:{
    borderWidth: 2,
    width: 200,
    height: 200,
    borderRadius: '50%',
    margin: 'auto',
    // marginVertical: 30,
    // backgroundColor: '#000'
  },
  textoNivel:{
    margin: 'auto',
    // color: '#fff',
    fontWeight: 'bolder',
    fontSize: 25,
  }
})
