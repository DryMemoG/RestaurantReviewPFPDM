import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Listado from './Listado'
import NuevaCategoria from './NuevaCategoria'

const Tab = createBottomTabNavigator();

export default function Inicio({ route, navigation }) {
    return (
        <Tab.Navigator 
            screenOptions={({ route })=> ({
                tabBarIcon:({focused,color}) => {
                    let iconName;
                    if (route.name === 'Listado') {
                        iconName = focused? 'ios-list-box' : 'ios-list'
                    } else if(route.name === 'NuevaCategoria'){
                    iconName = focused
                        ?'ios-add-circle' : 'ios-add-circle-outline';
                    }
                    return<Ionicons name={iconName} size = {28} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor:'#ffa',
                inactiveTintColor: '#858',
                labelStyle:{
                    fontSize:16,
                },
                style:{
                    backgroundColor: '#046'
                }
            }}
            
            >
            <Tab.Screen name="Listado" component={Listado} />
            <Tab.Screen name="Nueva Categoria" component={NuevaCategoria} />
            </Tab.Navigator>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#044'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});