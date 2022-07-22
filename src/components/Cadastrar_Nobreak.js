import * as React from "react";
import { TextInput, View, Button, Text } from "react-native";

export default (props) => {
  const codigaRecebido = props.route.params == undefined ? "" : props.route.params.codigo
  const codigo = props.route.params == undefined ? "" : props.route.params.codigo
  return (
    <View>
      <Text>{codigaRecebido}</Text>
      <Text>{codigo}</Text>
      <TextInput placeholder="Codigo" />
      <Button title="Mudar"
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