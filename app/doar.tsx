import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Importa para navegação

export default function Doar() {
  const router = useRouter();

  function handleDonate() {
    router.push('/formDoacao'); // Navega para a tela do formulário
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça sua Doação</Text>
      <Text style={styles.description}>
        Sua contribuição ajuda muitas crianças carentes. Obrigado por apoiar!
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleDonate} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Doar Agora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f0ff',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1e40af',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 18,
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 50,
    lineHeight: 26,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#f87171',
    paddingVertical: 16,
    paddingHorizontal: 70,
    borderRadius: 40,
    elevation: 8,
    shadowColor: '#b91c1c',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
});
