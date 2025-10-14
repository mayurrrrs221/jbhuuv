import React from 'react';
import { View, Picker, Platform } from 'react-native';
import { CATEGORIES } from '../constants/categories';

// For RN >= 0.66 use @react-native-picker/picker instead of Picker from 'react-native'
export default function CategoryPicker({ selected, onSelect }) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Picker
        selectedValue={selected}
        onValueChange={onSelect}
        style={{ height: 50, width: '100%' }}
      >
        <Picker.Item label="Select Category" value="" />
        {CATEGORIES.map(cat => (
          <Picker.Item key={cat.id} label={`${cat.emoji} ${cat.name}`} value={cat.id} />
        ))}
      </Picker>
    </View>
  );
}
