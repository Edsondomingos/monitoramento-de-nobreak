import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import Monitoramento from '../../../src/components/Monitoramento'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot tela Monitoramento', () => {
        const tela = renderer.create(<Monitoramento />).toJSON()
        expect(tela).toMatchSnapshot()
    })
    
})

describe("Teste de inicialização e Exibição", () => {
    it("Components tela Monitoramento", () => {
        const { getByText, getByTestId} = render(<Monitoramento />);
        
        expect(getByText("Uso de Energia")).toBeTruthy();
        expect(getByText("Bateria")).toBeTruthy();

        const btnLigar = getByTestId('btnLigar')
        fireEvent.press(btnLigar)
        expect(getByText('LIGADO'))
    })
})