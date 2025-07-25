import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyle';
import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image style={styles.image} source={batLogo} />
    </View>
  );
}