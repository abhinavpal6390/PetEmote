import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.title}>PetEmote</Text>
        </View>

        <View style={styles.todayMood}>
          <Text style={styles.sectionTitle}>Today's Mood</Text>
          <View style={styles.moodCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a' }}
              style={styles.petImage}
            />
            <View style={styles.moodInfo}>
              <Text style={styles.petName}>Max</Text>
              <Text style={styles.moodText}>Happy and Energetic</Text>
              <Text style={styles.suggestion}>
                Perfect time for a play session! Your pet is in a great mood.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.recentAnalysis}>
          <Text style={styles.sectionTitle}>Recent Analysis</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.analysisCard}>
                <Text style={styles.analysisTime}>2 hours ago</Text>
                <Text style={styles.analysisMood}>Playful</Text>
              </View>
            ))}
          </ScrollView>
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
  welcomeText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: '#666',
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 32,
    color: '#FF7043',
    marginTop: 4,
  },
  todayMood: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
    color: '#333',
    marginBottom: 16,
  },
  moodCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  petImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  moodInfo: {
    gap: 8,
  },
  petName: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 24,
    color: '#333',
  },
  moodText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
    color: '#FF7043',
  },
  suggestion: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  recentAnalysis: {
    padding: 20,
  },
  recentScroll: {
    flexGrow: 0,
  },
  analysisCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  analysisTime: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  analysisMood: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    color: '#333',
  },
});