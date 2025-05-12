import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

export default function Doar() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [quantia, setQuantia] = useState('');

  function validarTelefone(tel: string) {
    const regex = /^[0-9]{8,}$/;
    return regex.test(tel);
  }

  function validarQuantia(qt: string) {
    const num = Number(qt);
    return !isNaN(num) && num > 0;
  }

  function handleDoar() {
    if (!nome.trim()) {
      Alert.alert('Erro', 'Por favor, preencha seu nome completo.');
      return;
    }
    if (!validarTelefone(telefone)) {
      Alert.alert('Erro', 'Informe um número de telefone válido (somente números).');
      return;
    }
    if (!validarQuantia(quantia)) {
      Alert.alert('Erro', 'Informe uma quantia válida para doar.');
      return;
    }

    Alert.alert(
      'Obrigado!',
      `Doação de R$ ${quantia} recebida. Entraremos em contato pelo telefone ${telefone}.`
    );

    // Aqui você pode limpar os campos ou navegar para outra tela
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.title}>Faça sua Doação</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              placeholderTextColor="#7f9cf5"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(99) 99999-9999"
              placeholderTextColor="#7f9cf5"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
              maxLength={15}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Quantia (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 50"
              placeholderTextColor="#7f9cf5"
              value={quantia}
              onChangeText={setQuantia}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleDoar} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Doar Agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 420,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1e40af',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'rgba(30, 64, 175, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  inputContainer: {
    backgroundColor: '#cbd5e1',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 25,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    color: '#1e40af',
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    fontSize: 18,
    color: '#1e40af',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#e0e7ff',
    fontWeight: '800',
    fontSize: 20,
  },
});
