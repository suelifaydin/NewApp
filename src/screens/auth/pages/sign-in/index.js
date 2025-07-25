import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import CustomButton from '../../../../components/Buttons/custom-button';
import Input from '../../../../components/Inputs/index'; 
// import api from '../../api/api';  // 

// async function loginUser() {
//   const response = await api.post('/users/sign/in', { email, password });
// }

const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // const response = await api.post('/users/sign/in', {
      //   email,
      //   password,
      // });

      // const { token, name, surname } = response.data;

      // await AsyncStorage.setItem('userToken', token);
      // await AsyncStorage.setItem('userName', name);
      // await AsyncStorage.setItem('userSurname', surname);
      // navigation.navigate('Home', { screen: 'HomeScreen' });

      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          Alert.alert(t('success'), t('login_successful'));
          navigation.navigate('Home', { screen: 'HomeScreen' });
        } else {
          Alert.alert(t('error'), t('incorrect_credentials'));
        }
      } else {
        Alert.alert(t('error'), t('no_user_found'));
      }
    } catch (error) {
      console.error(error);
      Alert.alert(t('error'), t('login_error'));
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/global/bg2.png')}
      style={styles.container}
    >
      {/* Geri Tuşu */}
      <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../../../../assets/icon/vector.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Başlık */}
      <Text style={styles.title}>{t('welcome_back')}</Text>

      {/* Facebook */}
<TouchableOpacity style={styles.facebookButton}>
  <Image
    source={require('../../../../assets/icon/facebook.png')}
    style={styles.icon2}
  />
  <Text style={styles.facebookText}>{t('continue_with_facebook')}</Text>
</TouchableOpacity>


      {/* Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../../../../assets/icon/google.png')} style={styles.icon} />
        <Text style={styles.googleText}>{t('continue_with_google')}</Text>
      </TouchableOpacity>

      {/* Veya */}
      <Text style={styles.orText}>{t('or_login_email')}</Text>

      {/* Email */}
      <Input
        placeholder={t('email')}
        value={email}
        onChangeText={setEmail}
      />

      {/* Şifre */}
      <Input
        placeholder={t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Giriş Butonu */}
      <CustomButton
        title={t('login')}
        onPress={handleLogin}
      />

      {/* Şifremi Unuttum */}
      <Text style={styles.forgotText}>{t('forgot_password')}</Text>

      {/* Kayıt Ol */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          {t('dont_have_account')} <Text style={styles.signUpLink}>{t('sign_up')}</Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;
