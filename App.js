import * as React from 'react';
import { View, Button } from 'react-native';
import Tela_escolha from './src/components/Tela_escolha';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login';
import Monitoramento from './src/components/Monitoramento';
import Mudar from './src/components/Mudar';
import Cadastro from './src/components/EditarPerfil';

export default function App() {
  return (
    <View> 
      <Monitoramento />
    </View>
  )
}