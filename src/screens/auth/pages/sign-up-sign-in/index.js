import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import CustomButton from '../../../../components/Buttons/custom-button/index';

const SignUpSignIn = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={require('../../../../assets/global/bg.png')}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Silent</Text>
        <Image
          source={require('../../../../assets/global/logo.png')}
          style={styles.logoIcon}
        />
        <Text style={styles.logoText}>Moon</Text>
      </View>

      {/* İllüstrasyon */}
      <Image
        source={require('../../../../assets/global/girl.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Kayıt ol */}
      <CustomButton
        title={t('signUp')}
        onPress={() => navigation.navigate('SignUp')}
        backgroundColor="#8E97FD"
        textColor="#FFFFFF"
      />

      {/* Zaten hesabın var mı */}
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>
          {t('alreadyAccount')} <Text style={styles.loginLink}>{t('logIn')}</Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUpSignIn;
