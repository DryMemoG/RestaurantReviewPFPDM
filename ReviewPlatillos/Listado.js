import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';


export default function Listado() {
    return(
        <View style={styles.container}>
            <Text>Hola Mundo</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    mycard:{
        margin:5,
        borderColor:'#044BD9',
        borderWidth:3,
        borderRadius:10,
        padding:8,
        backgroundColor:'#2B76D9'

    }
});
  