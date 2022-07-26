import * as React from 'react'
import {ImageBackground} from 'react-native'
import { Container, Titulo, TextoBtn, TextoComum, Botao, Entrada } from '../../assets/styledComponents/Components'

export default function Login(props){
    return (
        <Container>
            <ImageBackground 
            source={require('../../img/iot.jpg')} 
            style={{width: 100, height: 100}} ></ImageBackground>
            <Titulo>Login</Titulo>
            
            <Entrada 
                placeholder='Digite seu email'
            />
            <Entrada 
                placeholder='Digite sua senha'
                secureTextEntry={true}
            />
            <Botao
                onPress={() => props.navigation.navigate('Menu')}
            >
                <TextoBtn>Entrar</TextoBtn>

            </Botao>
            <TextoComum onPress={() => props.navigation.navigate('Cadastro')}>Criar uma conta</TextoComum>
            
        </Container>
    )
}
