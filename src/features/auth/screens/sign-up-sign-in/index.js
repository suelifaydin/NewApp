import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import CustomButton from '../../../../components/Buttons/custombutton';
import LanguageModal from '../../../../components/LanguageModal';

const SignUpSignIn = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const { width, height } = useWindowDimensions();

  const getCurrentLanguage = () => {
    switch (i18n.language) {
      case 'tr':
        return require('../../../../assets/images/flag/flag-tr.png');
      case 'de':
        return require('../../../../assets/images/flag/flag-de.png');
      case 'ru':
        return require('../../../../assets/images/flag/flag-ru.png');
      case 'en':
      default:
        return require('../../../../assets/images/flag/flag-en.png');
    }
  };

  const dynamicStyles = {
    illustration: {
      width: width * 0.8,
      height: Platform.OS === 'ios' ? height * 0.4 : height * 0.35,
      marginBottom: Platform.OS === 'ios' ? 200 : 230,
    },
    logoIcon: {
      width: Platform.OS === 'ios' ? 40 : 35,
      height: Platform.OS === 'ios' ? 40 : 35,
      
    },
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/global/bg.png')}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Silent</Text>
        <Image
          source={require('../../../../assets/images/global/logo.png')}
          style={[styles.logoIcon, dynamicStyles.logoIcon]}
        />
        <Text style={styles.logoText}>Moon</Text>
      </View>

      {/* İllüstrasyon */}
      <Image
        source={require('../../../../assets/images/global/girl.png')}
        style={[styles.illustration, dynamicStyles.illustration]}
        resizeMode="contain"
      />

      {/* 🌐 Dil Seçme Butonu */}
      <TouchableOpacity
        onPress={() => setLanguageModalVisible(true)}
        style={styles.languageButton}
      >
        <Image source={getCurrentLanguage()} style={styles.languageIcon} />
      </TouchableOpacity>

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
          {t('alreadyAccount')}{' '}
          <Text style={styles.loginLink}>{t('logIn')}</Text>
        </Text>
      </TouchableOpacity>

      {/* 🌐 Modal */}
      <LanguageModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
      />
    </ImageBackground>
  );
};

export default SignUpSignIn;
