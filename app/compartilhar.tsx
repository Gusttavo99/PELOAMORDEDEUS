import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Alert, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export default function Compartilhar() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  async function handleShare() {
    try {
      await Share.share({
        message:
          'Conheça este projeto incrível que ajuda crianças carentes! Participe você também!',
      });
      animateButton();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível compartilhar no momento.');
    }
  }

  function animateButton() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }

  useEffect(() => {
    // Animação de entrada suave do container
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compartilhe o Projeto</Text>
      <Text style={styles.description}>
        Ajude a espalhar a palavra e traga mais pessoas para essa causa.
      </Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity style={styles.button} onPress={handleShare} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Compartilhar Agora</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Cada compartilhamento faz a diferença! 💙</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    backgroundColor: '#e6f0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 20,
    color: '#1e40af',
    textAlign: 'center',
    textShadowColor: 'rgba(30, 64, 175, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 18,
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1e40af',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 40,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#e0e7ff',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#3b82f6',
    textAlign: 'center',
  },
});
