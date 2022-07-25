import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mudar from './Mudar';
import Monitoramento from './Monitoramento';
import Cadastrar_Nobreak from "./Cadastrar_Nobreak";
import Login from './Login';
import Cadastro from "./Cadastro";

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="mudar" screenOptions={{ headerShown: true }} >

        <Stack.Screen name="Mudar" component={Mudar} options={{
          title: 'MENU',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Monitoramento" component={Monitoramento} options={{
          title: 'MONITORAMENTO',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Cadastrar_Nobreak" component={Cadastrar_Nobreak} options={{
          title: 'CADASTRAR_NOBREAK',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'LOGIN',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{
          title: 'CADASTRO',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}