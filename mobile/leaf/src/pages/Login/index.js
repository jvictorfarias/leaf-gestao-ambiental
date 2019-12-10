import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(null);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Identificação</Text>
        <TextInput
          style={styles.input}
          placeholder="Matrícula/SIAPE"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={id}
          onChangeText={setId}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
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
