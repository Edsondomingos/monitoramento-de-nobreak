import { render, fireEvent } from "@testing-library/react-native";
import Cadastrar_Nobreak from '../src/components/Tela_Escolha';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Teste de inicialização e Exibição", ()=>{
    it("Component de Cadastrar_Nobreak", ()=>{
        const { getByText,getByTestId } = render(<Cadastrar_Nobreak />);

        expect(getByText("Cadastrar Nobreak")).toBeTruthy();
        expect(getByText("Cadastrar")).toBeTruthy();
    })
})