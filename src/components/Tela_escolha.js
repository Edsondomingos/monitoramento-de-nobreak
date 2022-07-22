import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bateria from './Bateria';
import LigaDesligar from './LigaDesligar';
import Mudar from './Mudar';
//import Monitoramento from './Monitoramento';
import Cadastrar_Nobreak from "./Cadastrar_Nobreak";

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastrar_Nobreak" screenOptions={{ headerShown: true }} >

        <Stack.Screen name="Bateria" component={Bateria} options={{
          title: 'BATERIA',
          headerStyle: {
            backgroundColor: 'green',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="LigaDesligar" component={LigaDesligar} options={{
          title: 'LIGADESLIGAR',
          headerStyle: {
            backgroundColor: 'green',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Mudar" component={Mudar} options={{
          title: 'MUDAR',
          headerStyle: {
            backgroundColor: 'green',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        {/*<Stack.Screen name="Monitoramento" component={Monitoramento} options={{ title: 'MONITORAMENTO',
            headerStyle: {
            backgroundColor: 'green', }, headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          }, }} /> */}
        <Stack.Screen name="Cadastrar_Nobreak" component={Cadastrar_Nobreak} options={{
          title: 'CADASTRAR_NOBREAK',
          headerStyle: {
            backgroundColor: 'green',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}