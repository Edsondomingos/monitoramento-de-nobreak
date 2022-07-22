import * as React from "react";
import { TextInput, View, Button, Text } from "react-native";

export default (props) => {
  return (
    <View>
      <TextInput placeholder="Codigo" />
      <Button title="Cadastrar"
        onPress={() => {
          props.navigation.navigate("Mudar", { codigaRecebido: "", codigo: "" })
        }}
      />
      <Button color='red' title="Voltar"
        onPress={() => {
          props.navigation.goBack()
        }}
      />
    </View>
  )
}