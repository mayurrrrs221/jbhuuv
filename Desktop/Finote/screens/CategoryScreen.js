import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const categories = [
  { id: 'food', name: 'Food' },
  { id: 'travel', name: 'Travel' },
  { id: 'shopping', name: 'Shopping' },
  { id: 'utilities', name: 'Utilities' },
  { id: 'other', name: 'Other' },
];

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 18, color: '#2d6cdf' },
  item: { padding: 16, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, elevation: 2 },
  name: { fontSize: 18, color: '#333' },
});
