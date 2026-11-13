import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [ inputTexto, guardarInputTexto ] = useState('');
  const [ nombreStorage, guardarNombreStorage ] = useState('');

  useEffect(() => {
    obtenerDatosStorage()
  }, []);

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto)
      guardarNombreStorage(inputTexto)
      guardarInputTexto('')
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre');
      guardarNombreStorage(nombre ?? '')
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarDatos = async () => {
    try {
      await AsyncStorage.removeItem('nombre');
      guardarNombreStorage('')
      guardarInputTexto('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <View style={styles.container}>

        { nombreStorage ? <Text>Hola: {nombreStorage}</Text> : null}
        
        <TextInput
          style={styles.input}
          placeholder='Escribe tu Nombre'
          value={inputTexto}
          onChangeText={ texto => guardarInputTexto(texto)}
        />

        <Button
          title='Guardar'
          color='#333'
          onPress={ () => guardarDatos() }
        />

        { nombreStorage ? (
          <TouchableHighlight
            onPress={ () => eliminarDatos()}
            style={styles.btnEliminar}
          >
            <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
          </TouchableHighlight>
        ) : null }

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 20
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
    borderRadius: 10
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300
  },
});