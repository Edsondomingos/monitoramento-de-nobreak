import { render, fireEvent } from "@testing-library/react-native";
import renderer from 'react-test-renderer';
import Cadastrar_Nobreak from "../../../src/components/Cadastrar_Nobreak";
import Tela_escolha from "../../../src/components/Tela_escolha";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de Snapshot', () => {
    it('Snapshot de Cadastrar Nobreak', () => {
        const tela = renderer.create(<Cadastrar_Nobreak />).toJSON();
        expect(tela).toMatchSnapshot();
    })
})

describe("Teste de inicialização e Exibição", ()=>{
    it("Component de Cadastrar Nobreak", ()=>{
        const { getByText,getByTestId } = render(<Cadastrar_Nobreak />);

        expect(getByText("Cadastrar Nobreak")).toBeTruthy()
        expect(getByTestId("btn")).toBeTruthy()
    })
})
describe("Teste de Navegação", ()=>{
    it("Navegação de Cadastrar Nobreak para Login", ()=>{
        const { getByText, getByTestId } = render(<Tela_escolha />);

        // const bot = getByTestId("btn")
        // fireEvent.press(bot)

        // expect(getByText("Monitoramento")).toBeTruthy()
    })
})