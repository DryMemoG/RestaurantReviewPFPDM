import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Login({ route, navigation}){
    const [usuario, setUsuario]=useState('');
    const [usuarios, setUsuarios]=useState([])
    const [pwd, setpwd]=useState('');
    const [error , setError]=useState('');
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Proyecto Final</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.text}> Usuario: </Text>
            <TextInput style={styles.input} onChangeText={(text)=>{setUsuario(text)}}></TextInput>
            <Text style={styles.text}>Contraseña: </Text>
            <TextInput style={styles.input} onChangeText={(text)=>{setpwd(text)}}></TextInput>
            <Text style={{color:'red'}}>{error}</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                    query = 'http://192.168.1.8:3001/usuario/'+usuario;
                    fetch(query)
                    .then( res => res.json())
                    .then( datos => {
                        setUsuarios(datos)
                    })
                    .catch( error => {
                        console.log(error)
                        Alert.alert("No Hay conexión")
                    })
                    usuarios.map(u=>{
                        if(u.password == pwd){
                            navigation.push('Inicio')
                        }
                        else{
                            Alert.alert("Error", "Ingrese usuario o contraseña validos");
                        }
                        
                    })
                }} >
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:20,fontWeight: 'bold', color:'white',}}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
    
    </View>
    )
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:30,
      backgroundColor:'#044'
    },
    header:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body:{
      flex: 4,
      backgroundColor:'#777',
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      alignItems: 'center',
      paddingTop:100,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'white'
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
        color:'#ffA'
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
