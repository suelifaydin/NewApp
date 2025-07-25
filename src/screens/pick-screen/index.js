import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import lightStyles from './styles/light/index';
import darkStyles from './styles/dark/index';
import { getTheme } from '../../utils/theme/theme'; 

const PickScreen = () => {
const [theme, setTheme] = useState('light');

  useFocusEffect(
    useCallback(() => {
      const loadTheme = async () => {
        const savedTheme = await getTheme(); 
        console.log('Aktif tema:', savedTheme);
        setTheme(savedTheme);
      };
      loadTheme();
    }, [])
  );

  const styles = theme === 'dark' ? darkStyles : lightStyles;

  const backgroundImage =
    theme === 'dark'
      ? require('../../assets/global/sleep.png')
      : require('../../assets/global/bg.png');

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      key={theme}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.title}>What Brings you</Text>
        <Text style={styles.subtitle}>to Silent Moon?</Text>
        <Text style={styles.caption}>choose a topic to focus on:</Text>
      </View>

      <ScrollView contentContainerStyle={styles.cards}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/pick-screen/stress.png')}
            style={[styles.image, { height: 190 }]}
          />
          <Image
            source={require('../../assets/pick-screen/performance.png')}
            style={[styles.image, { height: 160 }]}
          />
        </View>

        <View style={styles.row}>
          <Image
            source={require('../../assets/pick-screen/happiness.png')}
            style={[styles.image, { height: 160 }]}
          />
          <Image
            source={require('../../assets/pick-screen/anxiety.png')}
            style={[styles.image, { height: 210 }]}
          />
        </View>

        <View style={styles.row}>
          <Image
            source={require('../../assets/pick-screen/growth.png')}
            style={[styles.image, { height: 180 }]}
          />
          <Image
            source={require('../../assets/pick-screen/sleep3.png')}
            style={[styles.image, { height: 160 }]}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PickScreen;
