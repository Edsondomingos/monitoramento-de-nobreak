import * as React from 'react'
import { useState } from "react"
import { Container, Titulo, TextoComum, Botao, Circulo, LigaDesliga, TextoBtn } from '../../assets/styledComponents/Components'
import { View, Text} from "react-native"
import Paho from "paho-mqtt"

var topico;
var mensagem;
var redeValue
let ligar

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

        client.subscribe("liga")
        // Se comecar off, deve setar false para liga(useState)
        const message3 = new Paho.Message("on") 
        message3.destinationName = "liga"
        client.send(message3)
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

    

export function onoff(valor){
    if (valor == true){
        valor = 'on'
    } else {
        valor = 'off'
    }
    client.subscribe("liga")
    const rele = new Paho.Message(valor)
    rele.destinationName = "liga"
    client.send(rele)
    ligar = !ligar
}

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
    const [liga, setLiga] = useState(true)

    client.onMessageArrived = function (message) {
        console.log('Topic: ' + message.destinationName + ", Message: " + message.payloadString)
         
        if (message.destinationName == 'nobreak'){
            setMsg(message.payloadString)
        }
        if (message.destinationName == 'rede'){
            setRede(message.payloadString)
        }
        if (message.destinationName == 'liga'){
            if (message.payloadString == 'on'){
                setLiga(true)
                ligar = true
            } else if (message.payloadString == 'off'){
                setLiga(false)
                ligar = false
            }
        }
        
    }     
    // return msg + rede
    // return (
    //     <View>
    //         <Text>{msg}v</Text>
    //         <Text>{porcentagem(msg)}</Text>
    //         <Text>{rede}</Text>
    //     </View>
        
    // )
    return (
        <>
            <Circulo>
                <TextoComum>Uso de Energia</TextoComum>        
                <TextoComum>{rede == '1' ? 'Conectado a Tomada':'Fora da tomada'}</TextoComum>
            </Circulo>
            
            
            <Circulo> 
                <TextoComum>Bateria</TextoComum>     
                <TextoComum>{msg}v</TextoComum>
                <TextoComum>{porcentagem(msg)}</TextoComum>
            </Circulo>

            <Circulo>
                <LigaDesliga 
                    testID='btnLigar'
                    style={liga ? {backgroundColor: '#7f7'} : {backgroundColor: '#f33'}}
                    onPress={() => onoff(!liga)}
                >
                <TextoComum>{liga ? 'LIGADO' : 'DESLIGADO'}</TextoComum>
                {/*<TextoComum>BTN</TextoComum>*/}
                </LigaDesliga>
            </Circulo>
        </>
    )
}

// export function Red(){

//     const [rede, setRede] = useState('')
//     console.log('fim app',App(),'<-')
//     redeValue = App().substring(4)
//     return (
//         <View>
//             <Text>
//                 {rede == '1' ? 'Conectado a Tomada':'Fora da tomada'}                
//                 {typeof rede}
//                 {redeValue}
//             </Text>
//         </View>
//     )
// }
 
