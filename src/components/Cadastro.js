import * as React from 'react'
import { ImageBackground } from 'react-native'
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components'

export default function Cadastro(props){
    return (
        <Container>
            <ImageBackground 
            source={require('../../img/iot.jpg')} 
            style={{width: 100, height: 100}} ></ImageBackground>
            <Titulo>Cadastro de Usuário</Titulo>
            <Entrada 
                placeholder='Nome completo'

            />
            <Entrada 
                placeholder='Digite seu email'

            />
            <Entrada 
                placeholder='Digite sua senha'
                secureTextEntry={true}
            />
            <Botao
                testID='btnCriar'
                onPress={() => props.navigation.navigate('Login')}
            >
                <TextoBtn>Criar Conta</TextoBtn>

            </Botao>
            
        </Container>
    )
}