import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import Login from "../Login/index";
import Cadastro from "../Cadastro/Index";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       <Stack.Navigator>
           <Stack.Screen
              name = "Login"
              component={Login}
              options={{ headerShown: false }}
           />
           <Stack.Screen
              name = "Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
           />
</Stack.Navigator> 
           )
           }