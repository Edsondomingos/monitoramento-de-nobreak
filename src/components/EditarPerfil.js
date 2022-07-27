import * as React from 'react'
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components'

export default function EditarPerfil(props){
    return (
        <Container>
            <Titulo>Editar Usuário</Titulo>
            <Entrada 
                placeholder='Nome completo'

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
            
        </Container>
    )
}