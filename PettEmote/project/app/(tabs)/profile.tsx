import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreditCard as Edit2, Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  const pets = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '3 years',
      imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Cat',
      breed: 'Persian',
      age: '2 years',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>My Pets</Text>
          <TouchableOpacity>
            <Settings size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.petsList}>
          {pets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Image source={{ uri: pet.imageUrl }} style={styles.petImage} />
              <View style={styles.petInfo}>
                <View style={styles.petHeader}>
                  <Text style={styles.petName}>{pet.name}</Text>
                  <TouchableOpacity>
                    <Edit2 size={20} color="#666" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.petType}>{pet.type} • {pet.breed}</Text>
                <Text style={styles.petAge}>{pet.age}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.addPetButton}>
          <Text style={styles.addPetText}>Add New Pet</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 28,
    color: '#333',
  },
  petsList: {
    padding: 20,
    gap: 20,
  },
  petCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  petImage: {
    width: '100%',
    height: 200,
  },
  petInfo: {
    padding: 16,
    gap: 8,
  },
  petHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  petName: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 24,
    color: '#333',
  },
  petType: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: '#666',
  },
  petAge: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#999',
  },
  addPetButton: {
    margin: 20,
    backgroundColor: '#FF7043',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addPetText: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    color: '#FFF',
  },
});