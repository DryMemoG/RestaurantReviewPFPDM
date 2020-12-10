import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, Alert} from 'react-native';



export default function Listado() {
    const [categorias, setCategorias]=useState([])

    cargar()
    const mycard=({item})=>{
        return(
            <View style={styles.tarjeta}>
                
                <Text style={styles.titulo}>{item.nombre_cat}</Text>
                <Text style={styles.text}>{item.descripcion}</Text>
                <Text style={styles.detalles}>Creado por: {item.user} </Text>
                <Text style={styles.detalles}>Fecha: {item.fecha_creada}</Text>
            </View>
        );
    }
    if(categorias.length>0){
        return(
            <View style={{marginTop:30, marginBottom:30}}>
                <View style={{alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.text}>Listado de Categorías</Text>
                </View>
                <FlatList
                data={categorias}
                renderItem={mycard}
                keyExtractor={item => item.id_categoria}
                /> 
            </View>
        );
    }
    function cargar()
{
    query = 'http://192.168.1.8:3001/categoria';
                    fetch(query)
                    .then( res => res.json())
                    .then( datos => {
                        setCategorias(datos)
                        
                    })
                    .catch( error => {
                        console.log(error)
                        Alert.alert("No Hay conexión")
                    })
                    
}



    return(
        <View style={styles.container}>
            <Text>Listado Vacío</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    tarjeta:{
        margin:5,
        borderColor:'#044BD9',
        borderWidth:3,
        borderRadius:10,
        padding:8,
        backgroundColor:'#2B7'

    },
    titulo:{
    fontSize:28,
    fontWeight: 'bold'
    },
    detalles: {
        fontSize:14,
        fontStyle: 'italic'
    }
});
  