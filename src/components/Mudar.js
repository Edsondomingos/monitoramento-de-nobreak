import React from "react"
import { TextInput, Text, View, Button } from "react-native"

export default function () {
  return (
    <View >
      <Button title="Ir para Bateria" onPress={() => { props.navigation.navigate("Bateria"); }}  />
      <Button title="Ir para LigaDesligar" onPress={() => { props.navigation.navigate("LigaDesligar"); }}  />
    </View>
  )
}