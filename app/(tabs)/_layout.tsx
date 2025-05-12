import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="adote"
        options={{
          title: 'Adote',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="card-giftcard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="apoie"
        options={{
          title: 'Apoie',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="attach-money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="suporte"
        options={{
          title: 'Suporte',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="help" color={color} />,
        }}
      />
    </Tabs>
  );
}
