import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import * as homeStyles from './styles';
import { useAppStyles } from '../../hooks';

const HomeScreen = observer(() => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [userName, setUserName] = useState('');
  const { t } = useTranslation();
  const styles = useAppStyles(homeStyles);

  const categories = [
    { label: 'All', icon: require('../../assets/icons/home-screen/all.png') },
    { label: 'My', icon: require('../../assets/icons/global-icon/my.png') },
    { label: 'Anxious', icon: require('../../assets/icons/home-screen/anxious.png') },
    { label: 'Sleep', icon: require('../../assets/images/global/sleep2.png') },
    { label: 'Kids', icon: require('../../assets/icons/home-screen/kids.png') },
  ];

  const sleepCards = [
    {
      titleKey: 'nightIsland',
      subtitle: '45 MIN · SLEEP MUSIC',
      image: require('../../assets/images/home-screen/night2.png'),
    },
    {
      titleKey: 'sweetSleep',
      subtitle: '45 MIN · SLEEP MUSIC',
      image: require('../../assets/images/global/night4.png'),
    },
    {
      titleKey: 'moonLight',
      subtitle: '60 MIN · SLEEP MUSIC',
      image: require('../../assets/images/global/night4.png'),
    },
    {
      titleKey: 'dreamySky',
      subtitle: '30 MIN · SLEEP MUSIC',
      image: require('../../assets/images/home-screen/night2.png'),
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

  const backgroundImage =
    styles === homeStyles.dark
      ? require('../../assets/images/global/sleep.png')
      : require('../../assets/images/global/bg.png');

 return (
  <ImageBackground source={backgroundImage} style={styles.container} resizeMode="cover">
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>
        {t('homeGreeting')}
        {userName ? `, ${userName}` : ''}
      </Text>
      <Text style={styles.greetingSubText}>{t('homeSubGreeting')}</Text>
    </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoryScroll}
      contentContainerStyle={styles.categoryScrollContent}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveCategory(item.label)}
          style={[styles.category, activeCategory === item.label && styles.activeCategory]}
        >
          <View style={[styles.iconWrapper, activeCategory === item.label && styles.activeIconWrapper]}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={[styles.categoryLabel, activeCategory === item.label && styles.activeCategoryLabel]}>
            {t(item.label.toLowerCase())}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <ImageBackground
      source={require('../../assets/images/home-screen/moon.png')}
      style={styles.oceanCard}
      imageStyle={{ borderRadius: 20 }}
    >
      <Text style={styles.oceanTitle}>{t('oceanTitle')}</Text>
      <Text style={styles.oceanDesc}>{t('oceanDesc1')}</Text>
      <Text style={styles.oceanDesc2}>{t('oceanDesc2')}</Text>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>{t('start')}</Text>
      </TouchableOpacity>
    </ImageBackground>

    {/* 🔽 SADECE BURAYI SCROLLABLE YAPTIK */}
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollArea}
      contentContainerStyle={styles.cardGrid}
    >
      {sleepCards.map((item, index) => (
        <TouchableOpacity key={index} style={styles.miniCard}>
          <Image source={item.image} style={styles.miniCardImage} />
          <Text style={styles.miniCardTitle}>{t(item.titleKey)}</Text>
          <Text style={styles.miniCardSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </ImageBackground>
);

});

export default HomeScreen;
