import React, { useState} from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { StyleSheet, Text, View, TextInput, Button, DatePicker, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NuevoUsuario({ route, navigation }) {
    const [nombre, setNombre]=useState('');
    const [apellido, setApellido]=useState('');
    const [usuario, setUsuario]=useState('');
    const [pass, setPwd]=useState('');
    
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30,fontWeight: 'bold',}}>Nuevo Usuario </Text>
        <TextInput style={styles.input} onChangeText={(text)=>{setNombre(text)}} placeholder='Nombre'>{nombre}</TextInput>
        <TextInput style={styles.input} onChangeText={(text)=>{setApellido(text)}} placeholder='Apellido'>{apellido}</TextInput>
        <TextInput style={styles.input} onChangeText={(text)=>{setUsuario(text)}} placeholder='User'>{usuario}</TextInput>
        <TextInput style={styles.input} onChangeText={(text)=>{setPwd(text)}} placeholder='Contraseña'>{pass}</TextInput>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => {
              fetch('http://192.168.1.8:3001/usuario', {
              
                method: "post",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                  { nombre: nombre, apellidos: apellido, user:usuario , password:pass}
                  )
                })
                .then( res=>res.text())
                .then(res=>{
                  Alert.alert("Usuario agregada con éxito")
                  setNombre('')
                  setApellido('')
                  setUsuario('')
                  setPwd('')
                  navigation.push('Login')
                })
                .catch(error =>console.log('Error: '+error))
              
            }} >
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight: 'bold', color:'white',}}>Agregar</Text>
            </View>
            </TouchableOpacity>
        </View>
        
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    input:{
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 100,
        padding:10,
        width: '75%',
        margin:15,
        fontSize:18,
        borderColor:'#858'
      },
    button:{
        width:'75%',
        backgroundColor:'#858',
        justifyContent: 'center',
        padding:10,
        borderRadius:50,
    },
});