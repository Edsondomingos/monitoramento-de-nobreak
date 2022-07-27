/*import * as React from 'react'
import { useState } from "react"
import { StyleSheet, View, Text} from "react-native"
import Paho from "paho-mqtt"

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
        client.subscribe("on")
        const message1 = new Paho.Message("Foiii")
        message1.destinationName = "on"
        client.send(message1)
    },
    onFailure: function () {
        console.log("Falhou")
    },
})

export default function App() {

    const [msg, setmsg] = useState('')

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
            <Text> Topico: {topico} </Text>
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