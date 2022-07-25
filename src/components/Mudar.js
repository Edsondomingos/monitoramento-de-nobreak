import * as React from "react"
import { View, Button } from "react-native"

export default (props) => {
  return (
    <View >
      <Button color={'green'} title="Ir para Monitoramento" onPress={() => { props.navigation.navigate("Monitoramento"); }} />
      <Button color={'green'} title="Ir para Login" onPress={() => { props.navigation.navigate("Login"); }} />
      <Button color={'green'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} />*/}
    </View>
  )
}