import { Tabs } from 'expo-router';
import { Camera, History, Chrome as Home, User } from 'lucide-react-native';
import { Platform } from 'react-native';

const THEME_COLOR = '#FF7043';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: Platform.OS === 'ios' ? 0.2 : 0,
          borderTopColor: '#E0E0E0',
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: THEME_COLOR,
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarLabelStyle: {
          fontFamily: 'Outfit-Medium',
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="capture"
        options={{
          title: 'Analyze',
          tabBarIcon: ({ color, size }) => <Camera size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => <History size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}