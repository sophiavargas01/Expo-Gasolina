import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [quantidade, setQuantidade] = useState('');
  const [kmrodado, setKmrodado] = useState('');
  const [resultado, setResultado] = useState('');

  const valorLitro = 5.52; // Valor fixo em R$5.52

  const calcular = () => {
    if (quantidade === '' || kmrodado === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const quant = parseFloat(quantidade);
    const km = parseFloat(kmrodado);

    if (isNaN(quant) || isNaN(km)) {
      alert('Valores inválidos. Certifique-se de usar números válidos.');
      return;
    }

    const consumo = km / (quant * valorLitro); // Calcula o consumo em km/l
    setResultado(consumo.toFixed(2));
  };

  const limpar = () => {
    setQuantidade('');
    setKmrodado('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Valor do litro (R$5.52)</Text>
        </View>
        <View>
          <Text>Quantidade Abastecida</Text>
          <View style={styles.input}>
            <TextInput
              value={quantidade}
              onChangeText={(text) => setQuantidade(text)}
              style={styles.texto}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View>
          <Text>Kilômetros Rodados</Text>
          <View style={styles.input}>
            <TextInput
              value={kmrodado}
              onChangeText={(text) => setKmrodado(text)}
              style={styles.texto}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Pressable style={styles.pressable} onPress={calcular}>
            <Text style={styles.resultado}>Calcular</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.title}>{`Resultado: ${resultado} km/Litro`}</Text>
        </View>
        <View>
          <Pressable style={styles.pressable} onPress={limpar}>
            <Text style={styles.resultado}>Limpar dados</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  texto: {
    fontSize: 16,
  },
  pressable: {
    backgroundColor: '#86ee86',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resultado: {
    color: 'black',
  },
});