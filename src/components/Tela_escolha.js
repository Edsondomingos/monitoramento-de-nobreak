import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from './Menu';
import Monitoramento from './Monitoramento';
import Cadastrar_Nobreak from "./Cadastrar_Nobreak";
import Login from './Login';
import Cadastro from "./Cadastro";
import EditarPerfil from './EditarPerfil';
import EditarNobreak from "./EditarNobreak";

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: true }} >

        <Stack.Screen name="Menu" component={Menu} options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Monitoramento" component={Monitoramento} options={{
          title: 'Monitoramento',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Cadastrar_Nobreak" component={Cadastrar_Nobreak} options={{
          title: 'Cadastrar Nobreak',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{
          title: 'Cadastro',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{
          title: 'Editar Perfil',
          headerStyle: {
            backgroundColor: '#00FFFF',
          }, headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="EditarNobreak" component={EditarNobreak} options={{
          title: 'Editar Nobreak',
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