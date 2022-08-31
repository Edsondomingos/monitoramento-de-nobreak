import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

export const MiniContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const Circulo = styled.View`
    width: 45%;
    height: 25%;
    border-radius: 100px;
    border: 5px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 0;
    
`;

export const Titulo = styled.Text`
    text-align: center;
    font-size: 30px;
    color: #000;
`;

export const TextoComum = styled.Text`
    text-align: center;
    font-size: 17px;
    color: #000;
    margin: 10px 0;
`;

export const TextoBtn = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #fff;
`;


export const Entrada = styled.TextInput`
    border: 1px solid #000;
    height: 35px;
    width: 250px;
    padding: 10px;
    border-radius: 7px;
    margin: 10px 0;
    background-color: #fff;
`;


export const Botao = styled.TouchableHighlight`
    border: 1px solid #000;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    margin: 10px 10px;
    background-color: #4763ff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BotaoNobreak = styled.TouchableHighlight`
    
    border-radius: 10px;
    width: 250px;
    height: 70px;
    margin: 10px 10px;
    background-color: #70abff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BotaoIcone = styled.TouchableHighlight`
    border-radius: 10px;
    width: 30%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icone = styled.ImageBackground`
    width: 50%;
    height: 50%;
`;

export const LigaDesliga = styled.TouchableHighlight`
    width: 90%;
    height: 90%;
    borderRadius: 100px;
    backgroundColor: #7f7;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
