import * as React from "react"
import { View, Button } from "react-native"

export default (props) => {
  return (
    <View >
      <Button color={'green'} title="Ir para Bateria" onPress={() => { props.navigation.navigate("Bateria"); }} />
      <Button color={'green'} title="Ir para LigaDesligar" onPress={() => { props.navigation.navigate("LigaDesligar"); }} />
      <Button color='red' title="Voltar"
        onPress={() => {
          props.navigation.goBack()
        }}
      />
    </View>
  )
}