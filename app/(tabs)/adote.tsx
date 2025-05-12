import React from 'react';

import HelpIcon from '@/components/helpIcon';
import { styles } from '@/src/style/style_adote';
import { useRouter } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
type Crianca = {
  id: string;
  nome: string;
  idade: number;
  descricao: string;
  foto: any;

}

const criancas: Crianca[] = [
  {
    id: '1',
    nome: 'Sofia',
    idade: 6,
    descricao: 'Sofia é uma menina alegre que adora desenhar e brincar ao ar livre.',
    foto: require('@/src/style/imagem/SOFIA.jpg'),
  },
  {
    id: '2',
    nome: 'Clara',
    idade: 7,
    descricao: 'Clara gosta muito de música e sonha em aprender a tocar piano.',
    foto: require('@/src/style/imagem/CLARA.jpg'),
  },
  {
    id: '3',
    nome: 'Luan',
    idade: 8,
    descricao: 'Luan é apaixonado por futebol e gosta de ajudar os amigos.',
    foto: require('@/src/style/imagem/LUAN.jpg'),
  },
  {
    id: '4',
    nome: 'Lucas',
    idade: 9,
    descricao: 'Lucas é curioso e adora ler histórias de aventura.',
    foto: require('@/src/style/imagem/LUCAS.jpg'),
  },
  {
    id: '5',
    nome: 'Pedro',
    idade: 7,
    descricao: 'Pedro é muito criativo e gosta de construir coisas com blocos.',
    foto: require('@/src/style/imagem/PEDRO.jpg'),
  },
];

type RotasCriancas = '/sofia' | '/clara' | '/luan' | '/lucas' | '/pedro';

export default function adote() {
  const router = useRouter();

  function handlePress(crianca: Crianca) {
    const rota = `/${crianca.nome.toLowerCase()}` as RotasCriancas;
    router.push(rota);
  }

  const renderItem = ({ item }: { item: Crianca }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePress(item)}
      activeOpacity={0.7}
    >
      <Image style={styles.image} source={item.foto} />
      <View style={styles.balao}>
        <Text style={styles.title}>
          Nome: {item.nome} ({item.idade} anos)
        </Text>
        <Text style={styles.text}>{item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={criancas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
       <HelpIcon />
    </View>
  );
}
