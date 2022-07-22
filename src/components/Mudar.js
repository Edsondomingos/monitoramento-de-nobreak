import * as React from "react"
import { View, Button } from "react-native"

export default function (props) {
  return (
    <View >
      <Button title="Ir para Bateria" onPress={() => { props.navigation.navigate("Bateria"); }}  />
      <Button title="Ir para LigaDesligar" onPress={() => { props.navigation.navigate("LigaDesligar"); }}  />
    </View>
  )
}