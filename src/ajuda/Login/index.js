import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Login() {
    const navigation = useNavigation();

  return (
    <View style={styles.TelaLogin}>
      <View style={styles.LoginS}>
        <Text style={styles.TextLogin}>Login</Text>
        <View style={styles.Frame4}>
          <Text style={styles.Input}>Email</Text>
        </View>
        <View style={styles.Frame5}>
          <Text style={styles.Input}>Senha</Text>
        </View>
        <View>
            <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')}>
        <Text style={styles.multiple1}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Frame6}>
          <Text style={styles.Txt725}>Entrar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TelaLogin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 232,
    paddingBottom: 429,
    paddingLeft: 15,
    paddingRight: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 926,
  },
  multiple1: {
color: "red",
paddingRight: 180,
marginBottom: 10,
  },
  LoginS: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  TextLogin: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginBottom: 39,
  },
  Frame4: {
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
  Input: {
    paddingLeft: 9,
    paddingRight: 9,
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.5)",
  },

  Frame5: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 368,
  },
  Input: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.5)",
  },

  Frame6: {
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
  Txt725: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
})
