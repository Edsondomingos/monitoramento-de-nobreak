import { Container, Titulo, TextoComum, TextoBtn, Entrada, Botao, Circulo} from './Components'

export default () => {
    return (
        <Container>
            <Titulo>Titulo</Titulo>
            <Entrada 
                placeholder='Input'
            />
            <Botao>
                <TextoBtn>Texto botao</TextoBtn>
            </Botao>
            <Circulo>
                <TextoComum>texto comum</TextoComum>
            </Circulo>
        </Container>
    )
}