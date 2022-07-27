import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import EditarPerfil from '../../../src/components/EditarPerfil'
import Tela_escolha from '../../../src/components/Tela_escolha'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot tela EditarPerfil', () => {
        const tela = renderer.create(<EditarPerfil />).toJSON()
        expect(tela).toMatchSnapshot()
    })
    
})

describe("Teste de inicialização e Exibição", () => {
    it("Components tela EditarPerfil", () => {
        const { getByText} = render(<EditarPerfil />);
        
        expect(getByText("Editar Usuário")).toBeTruthy()
        
    })
    it("Components tela EditarPerfil", () => {
        const { getByText, getByTestId} = render(<Tela_escolha />);

        // const btnEntrar = getByTestId('btnEntrar')
        // fireEvent.press(btnEntrar)
        // expect(getByText('Monitoramento')).toBeTruthy()

        // const btnCriar = getByTestId('btnCriar')
        // fireEvent.press(btnCriar)
        // expect(getByText('Cadastro de Usuário')).toBeTruthy()

        
    })
})