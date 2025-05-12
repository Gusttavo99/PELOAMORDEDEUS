
import { styles } from '@/src/style/style_apoie';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HelpIcon from '../../components/helpIcon';




const posts = [
  {
    id: '1',
    title: 'Campanha de Inverno 2025',
    summary: 'Ajude crianças carentes a se aquecerem neste inverno.',
    image: require('@/src/style/imagem/INVERNO-SOLIDARIO.jpeg'),
  },
  {
    id: '2',
    title: 'Evento Solidário',
    summary: 'Participe do nosso evento e faça a diferença!',
    image: require('@/src/style/imagem/EVENTO-SOLIDARIO.png'),
  },
  {
    id: '3',
    title: 'Doe Brinquedos',
    summary: 'Doe brinquedos e traga sorrisos para muitas crianças.',
    image: require('@/src/style/imagem/DOE-BRINQUEDOS.jpg'),
  },
];

const testimonials = [
  {
    id: 't1',
    name: 'Ana Silva',
    text: 'Apadrinhar mudou minha vida e a da criança que escolhi!',
  },
  {
    id: 't2',
    name: 'Carlos Pereira',
    text: 'Ver o sorriso deles é a melhor recompensa.',
  },
  {
    id: 't3',
    name: 'Maria Oliveira',
    text: 'Recomendo a todos que querem ajudar de verdade.',
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Apoie() {
  const scrollRef = useRef<ScrollView>(null);
  const router = useRouter();

  function handleDonate() {
    router.push('/doar'); 
  }

  function handleShare() {
    router.push('/compartilhar'); 
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Junte-se a nós para transformar vidas!</Text>

          {/* Feed de Posts */}
          <Text style={styles.sectionTitle}>Últimas Campanhas</Text>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <View style={[styles.card, { width: SCREEN_WIDTH * 0.75, maxWidth: 340 }]}>
                <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSummary}>{item.summary}</Text>
                <View style={styles.cardActions}>
                  <TouchableOpacity
                    style={[styles.button, styles.donateButton]}
                    onPress={handleDonate}
                  >
                    <Text style={styles.buttonText}>Doar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.shareButton]}
                    onPress={handleShare}
                  >
                    <Text style={styles.buttonText}>Compartilhar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          <Text style={styles.sectionTitle}>Depoimentos</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            style={{ marginBottom: 40 }}
          >
            {testimonials.map((t) => (
              <View
                key={t.id}
                style={[
                  styles.testimonialCard,
                  { width: SCREEN_WIDTH * 0.75, maxWidth: 340 },
                ]}
              >
                <Text style={styles.testimonialName}>{t.name}</Text>
                <Text style={styles.testimonialText}>"{t.text}"</Text>
              </View>
            ))}
          </ScrollView>
        </ScrollView>

        <TouchableOpacity style={styles.floatingButton} onPress={handleDonate}>
          <Text style={styles.floatingButtonText}>Doar Agora</Text>
        </TouchableOpacity>

        <HelpIcon />
      </View>
    </SafeAreaView>
  );
}