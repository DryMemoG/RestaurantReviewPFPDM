import React, { useState} from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { StyleSheet, Text, View, TextInput, Button, DatePicker, Alert, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
export default function NuevoUsuario({ route, navigation }) {
    const [nombre, setNombre]=useState('');
    const [descripcion, setdescripcion]=useState('');
    const [categoria, setCategoria]=useState();
    const [usuario, setUsuario]=useState();
    const [fotografia, setFotografia] = useState(null)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            setFotografia(result.uri);
            console.log(result.uri)
          }
          useEffect(() => {
            (async () => {
              if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                  alert('Sorry, we need camera roll permissions to make this work!');
                }
              }
            })();
          }, []);
    }
    
    return (
             
      <View style={styles.container}>
        <Text style={{fontSize: 30,fontWeight: 'bold',}}>Nuevo Platillo </Text>
        <TextInput style={styles.input} onChangeText={(text)=>{setNombre(text)}} placeholder='Nombre'>{nombre}</TextInput>
        <TextInput style={styles.input} onChangeText={(text)=>{setdescripcion(text)}} placeholder='Descripcion'>{descripcion}</TextInput>
        <Button title="Selecciona una imagen " onPress={pickImage} />
        
        {fotografia && <Image source={{ uri: fotografia }} style={{ width: 300, height: 300 }} />}
        <View style={styles.button}>
            <TouchableOpacity onPress={() => {
              fetch('http://192.168.1.8:3001/platillo', {
              
                method: "post",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                  { nombre_plat: nombre, descripcion: descripcion, categoria:'2',usuario:'2', fotografia:fotografia}
                  )
                })
                .then( res=>res.text())
                .then(res=>{
                  Alert.alert("Platillo agregado con éxito")
                  setNombre('')
                  setdescripcion('')
                  setFotografia('')
                  navigation.push('Inicio')
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
