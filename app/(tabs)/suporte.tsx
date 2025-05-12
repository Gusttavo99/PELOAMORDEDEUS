import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Suporte() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleEnviar() {
    if (!nome || !email || !mensagem) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert(
      'Mensagem enviada',
      'Obrigado pelo contato! Em breve responderemos seu pedido de suporte.'
    );
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Suporte</Text>
        <Text style={styles.subtitle}>
          Estamos aqui para ajudar! Envie sua dúvida ou problema.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#a0aec0"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#a0aec0"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva seu problema ou dúvida"
          placeholderTextColor="#a0aec0"
          multiline
          numberOfLines={5}
          value={mensagem}
          onChangeText={setMensagem}
        />

        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Contato Alternativo:</Text>
          <Text style={styles.infoText}>Telefone: (11) 95450-3768</Text>
          <Text style={styles.infoText}>E-mail: suporte@visaomundial.com</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#3b82f6',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#1e40af',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#e0e7ff',
    fontWeight: '700',
    fontSize: 18,
  },
  infoBox: {
    backgroundColor: '#cbd5e1',
    borderRadius: 8,
    padding: 16,
  },
  infoTitle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#1e40af',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#1e40af',
    marginBottom: 4,
  },
});
