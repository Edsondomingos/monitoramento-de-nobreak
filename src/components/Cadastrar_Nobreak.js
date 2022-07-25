import * as React from "react";
import { TextInput, View, Button, Text, StyleSheet, TouchableHighlight } from "react-native";

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput placeholder="Codigo" style={styles.input} />
      <TouchableHighlight style={styles.botao} onPress={() => props.navigation.navigate('Login')} >
      <Text style={styles.textbotao}>Cadastrar Nobreak</Text>
      </TouchableHighlight>
      
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff'
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    height: 30,
    width: 250,
    borderWidth: 1,
    margin: 'auto',
    marginVertical: 10,
    borderRadius: 5,
    padding: 5,
  },
  botao: {
    width: 250,
    height: 30,
    backgroundColor: '#55f',
    borderRadius: 7,
    margin: 'auto',
    marginVertical: 15,
  },
  textbotao:{
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    margin: 'auto'
},
})