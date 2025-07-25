import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import lightStyles from './styles/light/index.js';
import darkStyles from './styles/dark/index.js';
import { getTheme } from '../../utils/theme/theme.js'; 

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light');

  const styles = theme === 'light' ? lightStyles : darkStyles;

  const categories = [
    { label: 'All', icon: require('../../assets/icon/all.png') },
    { label: 'My', icon: require('../../assets/icon/my.png') },
    { label: 'Anxious', icon: require('../../assets/icon/anxious.png') },
    { label: 'Sleep', icon: require('../../assets/global/sleep2.png') },
    { label: 'Kids', icon: require('../../assets/icon/kids.png') },
  ];

  const sleepCards = [
    {
      title: 'Night Island',
      subtitle: '45 MIN · SLEEP MUSIC',
      image: require('../../assets/home-screen/night2.png'),
    },
    {
      title: 'Sweet Sleep',
      subtitle: '45 MIN · SLEEP MUSIC',
      image: require('../../assets/home-screen/night2.png'),
    },
    {
      title: 'Moon Light',
      subtitle: '60 MIN · SLEEP MUSIC',
      image: require('../../assets/home-screen/night2.png'),
    },
    {
      title: 'Dreamy Sky',
      subtitle: '30 MIN · SLEEP MUSIC',
      image: require('../../assets/home-screen/night2.png'),
    },
    {
      title: 'Night Island',
      subtitle: '45 MIN · SLEEP MUSIC',
      image: require('../../assets/home-screen/night2.png'),
    },
    {
      title: 'Sweet Sleep',
      subtitle: '45 MIN · SLEEP MUSIC',
      image: require('../../assets/home-screen/night2.png'),
    },
  ];

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUserName(parsedUser.name || '');
        }
      } catch (error) {
        console.log('Kullanıcı adı alınamadı:', error);
      }
    };

    fetchUserName();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const loadTheme = async () => {
        const savedTheme = await getTheme(); 
        setTheme(savedTheme);
      };
      loadTheme();
    }, [])
  );

  return (
    <ImageBackground
      source={
        theme === 'dark'
          ? require('../../assets/global/sleep.png')
          : require('../../assets/global/bg.png')
      }
      style={styles.container}
    >
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Good Night{userName ? `, ${userName}` : ''}
        </Text>
        <Text style={styles.greetingSubText}>We wish you have a good night</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20, marginTop: 20 }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveCategory(item.label)}
            style={[
              styles.category,
              activeCategory === item.label && styles.activeCategory,
            ]}
          >
            <View
              style={[
                styles.iconWrapper,
                activeCategory === item.label && styles.activeIconWrapper,
              ]}
            >
              <Image source={item.icon} style={styles.icon} />
            </View>

            <Text
              style={[
                styles.categoryLabel,
                activeCategory === item.label && styles.activeCategoryLabel,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ImageBackground
        source={require('../../assets/home-screen/moon.png')}
        style={styles.oceanCard}
        imageStyle={{ borderRadius: 20 }}
      >
        <Text style={styles.oceanTitle}>The Ocean Moon</Text>
        <Text style={styles.oceanDesc}>Non-stop 8-hour mixes of our</Text>
        <Text style={styles.oceanDesc2}>most popular sleep audio</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.cardScrollContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.cardGrid}
        >
          {sleepCards.map((item, index) => (
            <TouchableOpacity key={index} style={styles.miniCard}>
              <Image source={item.image} style={styles.miniCardImage} />
              <Text style={styles.miniCardTitle}>{item.title}</Text>
              <Text style={styles.miniCardSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
