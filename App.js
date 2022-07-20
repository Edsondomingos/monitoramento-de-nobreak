import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#21AEE4" barStyle="light-content" />
      <Routes/>
     
    </NavigationContainer>
  );
}