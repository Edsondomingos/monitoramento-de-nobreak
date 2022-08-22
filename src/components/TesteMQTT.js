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

const client = new Paho.Client(
    'broker.emqx.io',
    8083,
    '/'
)

// const client = new Paho.Client(
//     '10.44.1.35',
//     9001,
//     '/'
// )

client.connect({
    onSuccess: function () {
        console.log("connected")
        client.subscribe("nobreak")
        client.subscribe("rede")
        const message1 = new Paho.Message("12.5")
        message1.destinationName = "nobreak"
        client.send(message1)
    },
    onFailure: function () {
        console.log("Falhou")
    },
})

const porcentagem = (msg) => {    
    let valor = parseFloat(msg)
    if(valor >= 11.7 && valor <= 12.7){
        let resultado = parseInt((1 - (12.7 - valor)) * 100)
        return resultado + '%'
    } else if (valor < 11.7){
        return 'Descarregada'
    }
}

export default function App() {

    const [msg, setmsg] = useState('')
    const [val, setV] = useState()

    client.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
        topico = message.destinationName;
        mensagem = message.payloadString;
        setmsg(mensagem)
        // porcentagem(mensagem)
    }

    
    
    return (
        <View style={styles.container}>
            {/*<Text> Topico: {topico} </Text>*/}
            <Text>{mensagem}v</Text>
            <Text>{porcentagem(mensagem)}</Text>
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
