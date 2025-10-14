import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: 40, paddingBottom: 20, backgroundColor: '#2d6cdf' },
  headerText: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
});
