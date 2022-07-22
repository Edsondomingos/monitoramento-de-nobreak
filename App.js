import * as React from 'react';
import { View, Button} from 'react-native';;
import Tela_escolha from './src/components/Tela_escolha'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Index';
import Login from './src/components/Login';

export default function App() {
  return (

    <View> 
      <Login />
    </View>

    /*<NavigationContainer>
      <StatusBar backgroundColor="#21AEE4" barStyle="light-content" />
      <Routes/>
    {/*</NavigationContainer> 
  );*/
  )
}