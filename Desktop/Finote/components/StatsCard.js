import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatsCard({ label, value, icon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', margin: 8, padding: 15, borderRadius: 10, alignItems: 'center', elevation: 2 },
  icon: { fontSize: 24, marginBottom: 4 },
  label: { color: '#666', fontSize: 14, marginBottom: 2 },
  value: { fontSize: 20, color: '#2d6cdf', fontWeight: 'bold' },
});
