import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mudar from '../components/Mudar'
import Bateria from "../components/Bateria"
import LigaDesligar from "../components/LigaDesligar"

const Stack = createNativeStackNavigator()

export default function (){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Mudar" screenOptions={{headerShown: true}} >
        <Stack.Screen name="Bateria" component={Bateria} options={{ title: 'Bateria',
            headerStyle: {
            backgroundColor: 'green' }, headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
        <Stack.Screen name="Mudar" component={Mudar} options={{ title: 'Mudar',
            headerStyle: {
            backgroundColor: 'green' }, headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
        <Stack.Screen name="LigaDesligar" component={LigaDesligar} options={{ title: 'LigaDesligar',
            headerStyle: {
            backgroundColor: 'green' }, headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  