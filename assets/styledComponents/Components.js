import styled from 'styled-components/native'

export const Container = styled.View`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial;
`;

export const Circulo = styled.View`
    width: 200px;
    height: 200px
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const Titulo = styled.Text`
    text-align: center;
    font-size: 30px;
    color: #000;
`;

export const TextoComum = styled.Text`
    text-align: center;
    font-size: 25px;
    color: #000;
    color: #000;
    margin: auto;
`;

export const TextoBtn = styled.Text`
    text-align: center;
    font-size: 25px;
    color: #fff;
`;


export const Entrada = styled.TextInput`
    border: 1px solid #000;
    height: 35px;
    width: 250px;
    padding: 10px;
    border-radius: 7px;
`;


export const Botao = styled.TouchableHighlight`
    border: 1px solid #000;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    margin: 10px 0;
    background-color: #55f;
`;
