import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next'; // ✅ i18n çeviri
import styles from './styles';
import CustomButton from '../../components/Buttons/custom-button';

const WelcomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const { t } = useTranslation(); // ✅ hook

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUserName(parsedUser.name);
        }
      } catch (error) {
        console.error('Kullanıcı verisi alınamadı:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/global/welcome.png')}
      style={styles.container}
    >
      <Image
        source={require('../../assets/global/silentMoon.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        {t('hi')}, {userName} {t('welcome')}
      </Text>
      <Text style={styles.subtitle}>{t('to_silent_moon')}</Text>

      <Text style={styles.description}>{t('welcome_description')}</Text>

      <Image
        source={require('../../assets/global/meditasyon.png')}
        style={styles.illustration}
      />

      <CustomButton
        title={t('get_started')}
        onPress={() => navigation.navigate('Home', { screen: 'HomeScreen' })}
        backgroundColor="#fff"
        textColor="#3F414E"
        buttonStyle={{ paddingVertical: 10, width: '90%' }}
      />
    </ImageBackground>
  );
};

export default WelcomeScreen;
