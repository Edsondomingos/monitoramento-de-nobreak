import * as React from "react"
import { View, Button } from "react-native"

export default (props) => {
  return (
    <View >
      <Button color={'#00FF99'} title="Ir para Monitoramento" onPress={() => { props.navigation.navigate("Monitoramento"); }} />
      <Button color={'#00FF99'} title="Ir para Login" onPress={() => { props.navigation.navigate("Login"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro" onPress={() => { props.navigation.navigate("Cadastro"); }} />
      <Button color={'#00FF99'} title="Ir para Cadastro de Nobreak" onPress={() => { props.navigation.navigate("Cadastrar_Nobreak"); }} />
      {/*<Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} />*/}
    </View>
  )
}