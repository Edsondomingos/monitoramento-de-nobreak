import * as React from "react"
import { View, Button } from "react-native"

export default (props) => {
  return (
    <View >
      <Button color={'green'} title="Ir para de Monitoramento" onPress={() => { props.navigation.navigate("Monitoramento"); }} />
      <Button color='red' title="Voltar" onPress={() => { props.navigation.goBack() }} />
    </View>
  )
}