import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import Inicio from './Inicio';
import NuevoUsuario from "./NuevoUsuario"
import NuevoPlatillo from "./NuevoPlatillo"
import Platillos from "./Platillos"
const Stack = createStackNavigator();

export default function App() {
  const [iduser, setIduser] = useState("");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none" >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="NuevoUsuario" component={NuevoUsuario}/>
        <Stack.Screen name="NuevoPlatillo" component={NuevoPlatillo}/>
        <Stack.Screen name="Platillos" component={Platillos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}