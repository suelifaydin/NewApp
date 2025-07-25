import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Input from '../../../../components/Inputs/index';
// import api from '../../../../api/api';

const SignUp = ({ navigation }) => {
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
      alert('Lütfen tüm alanları doldurun ve gizlilik politikasını onaylayın.');
      return;
    }

    const userData = { name, surname, email, password };

    try {
      // const response = await api.post('/users/sign/up', {
      //   name,
      //   surname,
      //   email,
      //   password,
      // });

      // const { token, name: userName, surname: userSurname } = response.data;

      // await AsyncStorage.setItem('userToken', token);
      // await AsyncStorage.setItem('userName', userName);
      // await AsyncStorage.setItem('userSurname', userSurname);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Kayıt hatası:', error);
      alert('Kayıt sırasında bir hata oluştu.');
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/global/bg2.png')}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../../../../assets/icon/vector.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Create your account</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../../../../assets/icon/google.png')} style={styles.icon} />
        <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>

      {/* İsim */}
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        showCheckIcon
      />

      {/* Soyisim */}
      <Input
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
        showCheckIcon
        style={{ marginBottom: 10 }}
      />

      {/* Email */}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        showCheckIcon
      />

      {/* Şifre */}
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        passwordVisible={passwordVisible}
        onTogglePassword={() => setPasswordVisible(!passwordVisible)}
        showPasswordToggle
      />

      {/* Gizlilik Politikası */}
      <View style={styles.privacyContainer}>
        <Text style={styles.privacyText}>
          I have read the <Text style={styles.privacyLink}>Privacy Policy</Text>
        </Text>
        <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkbox}>
          {isChecked && <View style={styles.checkedBox} />}
        </TouchableOpacity>
      </View>

      {/* Get Started */}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleSignUp}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUp;
