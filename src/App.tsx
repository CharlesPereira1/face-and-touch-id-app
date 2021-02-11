import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';

const App: React.FC = () => {
  const [supported, setSupported] = useState(false);

  const handleLogin = () => {
    console.log('eu');
  };

  useEffect(() => {
    TouchID.isSupported()
      .then((sucess) => {
        setSupported(true);
      })
      .catch((error) => {
        console.log('Error' + error);
        Alert.alert('Touch ID não suportado/habilitado');
      });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableHighlight>
      <Text style={styles.text}>Hello word</Text>
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
