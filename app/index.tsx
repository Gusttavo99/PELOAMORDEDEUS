import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '@/src/style/style_index';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/src/style/imagem/VISAOMUNDIAL.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Bem-vindo!</Text>
      <Text style={styles.positiveText}>
        Juntos podemos transformar vidas através do apadrinhamento!
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => router.push('/adote')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
