import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function Loader({ size = "large", color = colors.primary, style }) {
  return (
    <View style={[styles.center, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
