import { Container, Titulo, TextoBtn, Botao, Entrada } from '../../assets/styledComponents/Components'
import { ImageBackground } from 'react-native-web'
export default function EditarNobreak(props){
    return (
        <Container>
            <ImageBackground source={require('../../img/iot.jpg')} style={{ width: 100, height: 100 }} >
            </ImageBackground>
            <Titulo>Cadastrar Nobreak</Titulo>
            <Entrada placeholder="Codigo/Modelo" />
            <Entrada placeholder="Endereço MAC" />
            <Botao testID='btn' onPress={() => props.navigation.navigate('Menu')} >
                <TextoBtn>Editar Nobreak</TextoBtn>
            </Botao>
        </Container>
    )
}