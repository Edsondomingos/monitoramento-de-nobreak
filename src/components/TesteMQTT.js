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
        console.log("connected")
        client.subscribe("nobreak")
        // client.subscribe("rede")
        const message1 = new Paho.Message("12.5")
        message1.destinationName = "nobreak"
        client.send(message1)
        // const message2 = new Paho.Message("1")
        // message2.destinationName = "rede"
        // client.send(message2)
        // mensagem = message1
        // redeValue = message2
    },
    onFailure: function () {
        console.log("Falhou")
    },
})

clientRede.connect({
    onSuccess: function () {
        console.log("connected")
        // client.subscribe("nobreak")
        client.subscribe("rede")
        // const message1 = new Paho.Message("12.5")
        // message1.destinationName = "nobreak"
        // client.send(message1)
        const message2 = new Paho.Message("1")
        message2.destinationName = "rede"
        client.send(message2)
    },
    onFailure: function () {
        console.log("Falhou")
    },
})

    
// TESTAR CRIAR CLIENT2 para RECEBE TOPICO DIFERENTE
const clientRede = new Paho.Client(
    'broker.emqx.io',
    8083,
    '/'
)

export function onoff(){
    client.subscribe("liga")
    const rele = new Paho.Message("on")
    rele.destinationName = "liga"
    client.send(rele)

}

// export function recebe() {
    // console.log(client.onMessageArrived.message.payloadString)
// export const recebe = client.onMessageArrived = function (message) {
//     topico = message.topic;
//     console.log('onMessageArrived')
//     if (topico == 'nobreak'){
//         mensagem = message.payloadString;
//     }
//     if (topico == 'rede'){
//         redeValue = message.payloadString;
//     }
//     console.log(mensagem, redeValue)
// }
// }
// client.onMessageArrived = (message) => message.topic == 'liga' ? console.log(message.payloadString) : console.log('Erro')

// function pegaDados(){
//     client.onMessageArrived = function (message) {
//         console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
//         // topico = message.destinationName;
//         topico = message.topic;
//         console.log(message)
//         if (topico == 'nobreak'){
//             mensagem = message.payloadString;
//             // setmsg(mensagem)
//         }
//         if (topico == 'rede'){
//             redeValue = message.payloadString;
//             // setRede(redeValue)
//         }
//         return message.payloadString
//     } 
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

export function App() {

    const [msg, setmsg] = useState('')
    const [rede, setRede] = useState()

    client.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
        // topico = message.destinationName;
        topico = message.topic;
        // console.log(message)
        // console.log('Topico->', topico)
        // console.log('APP ^')
        if (topico == 'nobreak'){
            mensagem = message.payloadString;
            setmsg(mensagem)
        } 
        // if (topico == 'rede'){
        //     redeValue = message.payloadString;
        //     setRede(redeValue)
        //     Red(redeValue)
        //     console.log(typeof redeValue)
        // }
    }    
    
    clientRede.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
        // topico = message.destinationName;
        topico = message.topic;
        if (topico == 'rede'){
            redeValue = message.payloadString;
            setRede(redeValue)
            Red(redeValue)
            console.log(typeof redeValue)
        }
    }  
    
    return (
        <View>
            <Text>{mensagem}v</Text>
            <Text>{porcentagem(mensagem)}</Text>
            <Text>{redeValue}</Text>
            <Text>{console.log('Dentro de App: ',mensagem, redeValue)}</Text>
        </View>
        
    )
}

export function Red(ligado){
    // console.log('topo de REDE')

    const [rede, setRede] = useState()
    // let [teste, setTeste] = useState()

    // client.onMessageArrived = function (message) {
    //     console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString);
    //     topico = message.topic;
    //     console.log('REDE ')
        // if (topico == 'rede'){
        //     redeValue = message.payloadString;
        //     setRede(rede)
            // setTeste(typeof redeValue)
        // }
    // }  
    
    return (
        <View>
            <Text>
                {parseInt(ligado) == 0 ? 'Conectado a Tomada':'Fora da tomada'}
                {typeof parseInt(ligado)}
                
            </Text>
        </View>
    )
}
