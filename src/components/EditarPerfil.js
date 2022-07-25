import * as React from 'react'
import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components'

export default function Cadastro(){
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
            
            >
                <TextoBtn>Entrar</TextoBtn>

            </Botao>
            
        </Container>
    )
}