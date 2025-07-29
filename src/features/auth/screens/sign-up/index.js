import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import Input from '../../../../components/Inputs';

const SignUp = ({ navigation }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async () => {
    if (!name || !surname || !email || !password || !isChecked) {
      alert(t('fill_all_fields_warning'));
      return;
    }

    const userData = { name, surname, email, password };

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Kayıt hatası:', error);
      alert(t('signup_error'));
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/global/bg2.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../../assets/icons/global-icon/vector.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{t('create_account')}</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../../../../assets/icons/auth-screen/google.png')}
          style={styles.icon}
        />
        <Text style={styles.googleText}>{t('continue_with_google')}</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>{t('or_login_email')}</Text>

      <Input
        placeholder={t('name')}
        value={name}
        onChangeText={setName}
        showCheckIcon
      />

      <Input
        placeholder={t('surname')}
        value={surname}
        onChangeText={setSurname}
        showCheckIcon
        style={{ marginBottom: 10 }}
      />

      <Input
        placeholder={t('email')}
        value={email}
        onChangeText={setEmail}
        showCheckIcon
      />

      <Input
        placeholder={t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        passwordVisible={passwordVisible}
        onTogglePassword={() => setPasswordVisible(!passwordVisible)}
        showPasswordToggle
      />

      <View style={styles.privacyContainer}>
        <TouchableOpacity
          onPress={handleCheckboxToggle}
          style={styles.checkbox}
        >
          {isChecked && <View style={styles.checkedBox} />}
        </TouchableOpacity>
        <Text style={styles.privacyText}>
          {t('privacy_prefix')}{' '}
          <Text style={styles.privacyLink}>{t('privacy_policy')}</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={handleSignUp}
      >
        <Text style={styles.getStartedText}>{t('get_started')}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUp;
