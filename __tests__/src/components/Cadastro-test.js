import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import Cadastro from '../../../src/components/Cadastro'
import Tela_escolha from '../../../src/components/Tela_escolha'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot tela Cadastro', () => {
        const tela = renderer.create(<Cadastro />).toJSON()
        expect(tela).toMatchSnapshot()
    })
    
})

describe("Teste de inicialização e Exibição", () => {
    it("texto em Cadastro", () => {
        const { getByText, getByTestId} = render(<Cadastro />);
        
        expect(getByText("Cadastro de Usuário")).toBeTruthy()

    })
    it("Botao Criar conta", () => {
        const { getByText, getByTestId} = render(<Tela_escolha />);

        const btnCriar = getByTestId('btnCriar')
        fireEvent.press(btnCriar)
        expect(getByText('Login')).toBeTruthy()

        
    })
})