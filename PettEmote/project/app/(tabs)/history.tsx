import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoryScreen() {
  const moodHistory = [
    {
      id: 1,
      date: 'Today, 2:30 PM',
      mood: 'Happy',
      description: 'Tail wagging, relaxed posture',
      imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    },
    {
      id: 2,
      date: 'Today, 10:15 AM',
      mood: 'Excited',
      description: 'Playful behavior, high energy',
      imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9',
    },
    {
      id: 3,
      date: 'Yesterday',
      mood: 'Relaxed',
      description: 'Calm demeanor, gentle purring',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Mood History</Text>
          <Text style={styles.subtitle}>Track your pet's emotional journey</Text>
        </View>

        <View style={styles.historyList}>
          {moodHistory.map((item) => (
            <View key={item.id} style={styles.historyCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.historyImage} />
              <View style={styles.historyInfo}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.mood}>{item.mood}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 28,
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#666',
  },
  historyList: {
    padding: 20,
    gap: 20,
  },
  historyCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  historyImage: {
    width: '100%',
    height: 200,
  },
  historyInfo: {
    padding: 16,
    gap: 8,
  },
  date: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#999',
  },
  mood: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
    color: '#FF7043',
  },
  description: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});