import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Pedro() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/src/style/imagem/PEDRO.jpg')}
        style={styles.image}
      />
      <Text style={styles.name}>Pedro</Text>
      <Text style={styles.description}>
        Pedro é um menino criativo que adora construir coisas com blocos e inventar novas brincadeiras. Seu espírito inventivo é contagiante!
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Apadrinhe!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f0f5ff',
    flexGrow: 1,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#4f46e5',
    marginBottom: 25,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#3730a3',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 40,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#e0e7ff',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
});
