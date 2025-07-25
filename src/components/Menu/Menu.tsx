import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './MenuStyles'

export function Menu() {
  return (
    <View style={styles.container}>
      <Text>Olá Menu 🦇</Text>
    </View>
  );
}