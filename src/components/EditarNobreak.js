import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components'
export default function EditarNobreak(props){
    return (
        <Container>
            <Titulo>Editar Nobreak</Titulo>
            <Entrada placeholder='codigo'/>
            <Botao 
                onPress={() => props.navigation.navigate('Mudar')}
            >
                <TextoBtn>Editar Nobreak</TextoBtn>
            </Botao>
        </Container>
    )
}