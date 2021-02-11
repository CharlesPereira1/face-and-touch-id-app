import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';

const App: React.FC = () => {
  const [supported, setSupported] = useState<boolean>(false);
  const [name, setName] = useState('');

  const handleLogin = () => {
    const configs = {
      title: 'Autenticação Touch ID',
      color: '#FF0000',
      sensorErrorDescription: 'Touch ID invalido.',
    };

    TouchID.authenticate('Login app', configs)
      .then((res: string) => {
        if (res) {
          setName('Charles Pereira');
        }
      })
      .catch((error: string) => {
        console.log(`Acesso negado = ${error}`);
      });
  };

  useEffect(() => {
    TouchID.isSupported()
      .then((response) => {
        setSupported(true);
        console.log(`Acesso permitido = ${response}`);
      })
      .catch((error) => {
        console.log(`Acesso negado = ${error}`);
        Alert.alert('Touch ID não suportado/habilitado');
      });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableHighlight>
      <Text style={styles.text}>
        {supported ? `Bem vindo ${name}` : 'Bem vindo a tela de login'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 3,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#7159c1',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
