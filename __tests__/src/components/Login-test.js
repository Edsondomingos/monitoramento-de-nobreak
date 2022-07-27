import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import Login from '../../../src/components/Login'
import Tela_escolha from '../../../src/components/Tela_escolha'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// describe('Teste de snapshot', () => {
//     it('Snapshot tela Login', () => {
//         const tela = renderer.create(<Login />).toJSON()
//         expect(tela).toMatchSnapshot()
//     })
    
// })

describe("Teste de inicialização e Exibição", () => {
    it("Components tela Login", () => {
        const { getByText, getByTestId} = render(<Tela_escolha />);
        
        expect(getByText("Login")).toBeTruthy();

        const btnEntrar = getByTestId('btnEntrar')
        fireEvent.press(btnEntrar)
        expect(getByText('Monitoramento')).toBeTruthy()

        const btnCriar = getByTestId('btnCriar')
        fireEvent.press(btnCriar)
        expect(getByText('Cadastro de Usuário')).toBeTruthy()

        
    })
})