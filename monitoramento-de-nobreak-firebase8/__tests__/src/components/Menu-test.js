import { render, fireEvent } from "@testing-library/react-native";
import renderer from 'react-test-renderer';
import Menu from "../../../src/components/Menu";
import Tela_escolha from "../../../src/components/Tela_escolha";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de Snapshot', () => {
    it('Snapshot de Cadastrar Nobreak', () => {
        const tela = renderer.create(<Menu />).toJSON();
        expect(tela).toMatchSnapshot();
    })
})