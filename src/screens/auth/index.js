import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import CustomButton from '../../components/Buttons/custom-button';

const WelcomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');

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

      <Text style={styles.title}>Hi {userName}, Welcome</Text>
      <Text style={styles.subtitle}>to Silent Moon</Text>

      <Text style={styles.description}>
        Explore the app, Find some peace of mind to prepare for meditation.
      </Text>

      <Image
        source={require('../../assets/global/meditasyon.png')}
        style={styles.illustration}
      />

    <CustomButton
  title="GET STARTED"
  onPress={() => navigation.navigate('Home', { screen: 'HomeScreen' })}
  backgroundColor="#fff"
  textColor="#3F414E"
  buttonStyle={{ paddingVertical: 10, width: '90%' }} 
/>
    </ImageBackground>
  
);
};

export default WelcomeScreen;
