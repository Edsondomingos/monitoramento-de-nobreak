import * as React from 'react'
import { useState } from "react"
import { StyleSheet, View, Text} from "react-native"
import Paho from "paho-mqtt"

var topico;
var mensagem;

const ssid = "wIFRN-IoT";
const  password = "deviceiotifrn";
const mqtt_broker = "10.44.1.35";

const mqtt_username = "emqx";
const mqtt_password = "public";
const mqtt_port = 1883;

// const client = new Paho.Client(
//     'broker.emqx.io',
//     8083,
//     '/'
// )

const client = new Paho.Client(
    '10.44.1.35',
    9001,
    '/'
)

client.connect({
    onSuccess: function () {
        console.log("connected")
        client.subscribe("nobreak")
        // const message1 = new Paho.Message("Maracuja")
        // message1.destinationName = "nobreak"
        // client.send(message1)
    },
    onFailure: function () {
        console.log("Falhou")
    },
})

export default function App() {

    const [msg, setmsg] = useState('')
    const [vl, setV] = useState('')

    client.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
        topico = message.destinationName;
        mensagem = message.payloadString;
        setmsg(mensagem)
    }

    const porcentagem = () => {
        valor = parseFloat(mensagem)
        if(valor >= 11.7 && valor <= 12.7){
            setV(resultado = (1 - (12.7 - valor)) * 100)
        } else if (valor < 11.7){
            setV('Descarregada')
        }
    }
   
    

    return (
        <View style={styles.container}>
            {/*<Text> Topico: {topico} </Text>*/}
            <Text> {mensagem} </Text>
            <Text> % {porcentagem} </Text>
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
})
