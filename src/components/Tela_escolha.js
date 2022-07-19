import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bateria from "../components/Bateria"
import LigaDesliga from "../components/LigaDesligar"

const Stack = createNativeStackNavigator()

export default function app(){
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="" screenOptions={{headerShown: true}} >
        <Stack.Screen name="" component={''} options={{ title: '',
              headerStyle: {
              backgroundColor: 'green', }, headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
              }} />
        <Stack.Screen name="Bateria" component={Bateria} options={{ title: 'Bateria',
              headerStyle: {
              backgroundColor: 'green', }, headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }} />
        <Stack.Screen name="LigaDesliga" component={LigaDesliga} options={{ title: 'LigaDesliga',
              headerStyle: {
              backgroundColor: 'green', }, headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  