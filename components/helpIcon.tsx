import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function HelpIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push('/suporte')}
      style={{
        position: 'absolute',
        bottom: 30,
        left: 20,
        backgroundColor: '#e0e7ff',
        borderRadius: 30,
        padding: 8,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
      }}
      accessibilityLabel="Ajuda"
      accessibilityHint="Navega para a tela de suporte"
    >
      <MaterialIcons name="help-outline" size={32} color="#2563eb" />
    </TouchableOpacity>
  );
}
