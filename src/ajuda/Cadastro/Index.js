import React from "react"
import { StyleSheet, TextInput, Text, View, ImageBackground } from "react-native"

export default function Iphone13ProMax1() {
  return (
    <View style={styles.Iphone13ProMax1}>
      <View style={styles.Group317}>
        <Text style={styles.Txt169}>Cadastro</Text>
        </View>
        <TextInput style={styles.Frame1}
        placeholder="Email">
          <Text style={styles.Txt1021}></Text>
        </TextInput>
        <View style={styles.Frame2}>
          <Text style={styles.Txt1021}>Senha</Text>
        </View>
        <View style={styles.Frame3}>
          <Text style={styles.Txt037}>Cadastrar</Text>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  Iphone13ProMax1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 230,
    paddingBottom: 431,
    paddingLeft: 16,
    paddingRight: 29,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 926,
  },
  Group317: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt169: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginBottom: 39,
  },
  Frame1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 368,
  },
  Txt1021: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.5)",
  },

  Frame2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginBottom: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 368,
  },
  Txt1021: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.5)",
  },

  Frame3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 36,
    backgroundColor: "rgba(84,173,255,1)",
    width: 206,
  },
  Txt037: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
})
