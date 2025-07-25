import React, { useEffect } from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignUpSignIn');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/global/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Silent</Text>
          <Image
            source={require('../../assets/global/logo.png')}
            style={styles.logoIcon}
            resizeMode="contain"
          />
          <Text style={styles.titleText}>Moon</Text>
        </View>

        <Image
          source={require('../../assets/global/girl.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
