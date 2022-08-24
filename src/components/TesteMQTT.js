import * as React from 'react'
import { useState } from "react"
import { View, Text} from "react-native"
import Paho from "paho-mqtt"

var topico;
var mensagem;
var redeValue

// const ssid = "wIFRN-IoT";
// const  password = "deviceiotifrn";
// const mqtt_broker = "10.44.1.35";

// const mqtt_username = "emqx";
// const mqtt_password = "public";
// const mqtt_port = 1883;

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
        console.log("conectado")
        client.subscribe("nobreak")
        // client.subscribe("rede")
        const message1 = new Paho.Message("12.5")
        message1.destinationName = "nobreak"
        client.send(message1)

        client.subscribe("rede")
        const message2 = new Paho.Message("0")
        message2.destinationName = "rede"
        client.send(message2)
    },
    onFailure: function () {
        console.log("Falhou")
    },
})

// const clientRede = new Paho.Client(
//     'broker.emqx.io',
//     8083,
//     '/'
// )

// clientRede.connect({
//     onSuccess: function () {
//         console.log("Rede Conectada")
//         clientRede.subscribe("rede")
//         const message2 = new Paho.Message("0")
//         message2.destinationName = "rede"
//         clientRede.send(message2)
        
//     },
//     onFailure: function () {
//         console.log("Falhou")
//     },
// })

// const clientLiga = new Paho.Client(
//     'broker.emqx.io',
//     8083,
//     '/'
// )

// clientLiga.connect({
//     onSuccess: function () {
//         console.log("Liga Conectada")
//         clientLiga.subscribe("liga")
//         const message3 = new Paho.Message("on")
//         message3.destinationName = "liga"
//         clientRede.send(message3)
//     },
//     onFailure: function () {
//         console.log("Falhou")
//     },
// })

    

// export function onoff(){
//     clientLiga.subscribe("liga")
//     const rele = new Paho.Message("on")
//     rele.destinationName = "liga"
//     client.send(rele)

// }

const porcentagem = (msg) => {    
    let valor = parseFloat(msg)
    if(valor >= 11.7 && valor <= 12.7){
        let resultado = parseInt((1 - (12.7 - valor)) * 100)
        return resultado + '%'
    } else if (valor < 11.7){
        return 'Descarregada'
    }
}

// console.log(client.onMessageArrived =  (message) => message)
export function App() {
    
    const [msg, setMsg] = useState('')
    const [rede, setRede] = useState('')

    client.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString)
        // topico = 
        
        if (message.destinationName == 'nobreak'){
            // mensagem = message.payloadString;
            setMsg(message.payloadString)
        }
        if (message.destinationName == 'rede'){
            // redeValue = message.payloadString;
            setRede(message.payloadString)
            // Red(message.payloadString)
            redeValue = message.payloadString
        }
    }     
    
    return (
        <View>
            <Text>{msg}v</Text>
            <Text>{porcentagem(msg)}</Text>
            <Text>{rede}</Text>
        </View>
        
    )
}

export function Red(valor){

    const [rede, setRede] = useState('')

    // clientRede.onMessageArrived = function (message) {
    //     console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
    //     topico = message.destinationName
        // if (topico == 'rede'){
        //     redeValue = message.payloadString;
        //     setRede(redeValue)
        //     console.log('Red')
        // }
    // }  
    // console.log('Red')
    return (
        <View>
            <Text>
                {valor == '1' ? 'Conectado a Tomada':'Fora da tomada'}                
                {typeof rede}
                
            </Text>
        </View>
    )
}
 
