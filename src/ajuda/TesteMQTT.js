/*import * as React from 'react'
import { useState } from "react"
// import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button, TextInput} from "react-native"
//import ToggleSwitch from "toggle-switch-react-native"
import Paho from "paho-mqtt"
import { useEffect } from "react/cjs/react.production.min"
// import { useEffect } from "react"

var topico;
var mensagem;

const client = new Paho.Client(
    'broker.emqx.io',
    8083,
    '/'
)

client.connect({
    onSuccess: function () {
        console.log("connected")
        client.subscribe("esp32/output")
        client.subscribe("esp32/distance")
        client.subscribe("World"); // As linhas a seguir sao uma tentativa de envio de mensagem
        const message1 = new Paho.Message("Conexao OK"); // AGORA funcionando
        message1.destinationName = "World"; // para testar

        client.send(message1); // abrir o broker online
    },
    onFailure: function () {
        console.log("Besti Besti")
    },
    //userName: 'emqx',
    //password: 'public',
    //useSSL: true,
})

export default function App() {
    //const [isOn, setIsOn] = useState(false)

    const [msg, setmsg] = useState('')
    //const handleToggle = () => {
        //setIsOn(!isOn)
   // }

    client.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
        topico = message.destinationName;
        mensagem = message.payloadString;
        setmsg(mensagem)
        
    }
   

    return (
        <View style={styles.container}>
            {/*}<ToggleSwitch isOn={isOn} onToggle={handleToggle} />
            <StatusBar style="auto" />
           {/*} <Text> Topico: {topico} </Text>
            <Text> Mensagem: {mensagem} </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})*/