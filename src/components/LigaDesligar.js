import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Switch, TouchableHighlight, } from 'react-native';

export default function LigaDesligar() {
  const [liga, setLigar] = useState(false);

  function switchLigar() {
    setLigar(!liga);
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight 
          style={liga ? styles.botao : styles.botaoD}
          onPress={switchLigar}
        >
        <Text style={styles.txtBt}>{liga ? 'LIGADO' : 'DESLIGADO'}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: '50%',
    backgroundColor: '#7f7'
  },
  botaoD: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: '50%',
    backgroundColor: '#f33'
  },
  txtBt:{
    margin: 'auto',
    fontSize: 30,
    fontWeight: 'bolder'
  },
});
