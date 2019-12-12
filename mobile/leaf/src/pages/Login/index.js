import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import logo from '../../../assets/icon.png';
import api from '../../services/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(null);

  async function handleSubmit() {
    /*
    if (password === '') {
      Alert.alert('Senha em branco!');
      return false;
    }
    if (email === '') {
      Alert.alert('Digite seu email!');
      return false;
    }

    try {
      const response = await api.post('session', { email, password, type });

      const { token } = response.data;
      await AsyncStorage.setItem('tokenSession', token);
    } catch (error) {
      if (error.status === 401) {
        Alert.alert('Usuário não encontrado!');
        return false;
      }
      if (error.status === 403) {
        Alert.alert('Credenciais Incorretas!');
        return false;
      }

      if (error.status === 400) {
        Alert.alert('Servidor Offline');
        return false;
      }

      if (error.status === 500) {
        Alert.alert('Servidor está instável.');
        return false;
      }
    }
    */
    navigation.navigate('Main');

    return true;
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b405e',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
    },

    form: {
      backgroundColor: '#fff',
      marginTop: 25,
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      borderRadius: 4,
      marginHorizontal: 25,
      paddingVertical: 25,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 2,
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      height: 44,
      marginBottom: 15,
    },
    inputCaptcha: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 2,
      height: 44,
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      marginRight: 105,
      fontSize: 16,
      color: '#444',
      marginBottom: 15,
    },
    button: {
      height: 42,
      backgroundColor: '#00ff00',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
    },
    buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>Identificação</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <RNPickerSelect
          value={type}
          onValueChange={setType}
          placeholder={{
            label: 'Técnico / Aluno',
            value: null,
            color: '#999',
          }}
          items={[
            { label: 'Aluno', value: 'student' },
            { label: 'Técnico', value: 'technician' },
          ]}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
