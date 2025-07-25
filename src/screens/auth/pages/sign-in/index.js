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
import styles from './styles';
import CustomButton from '../../../../components/Buttons/custom-button';
import Input from '../../../../components/Inputs/index'; 
// import api from '../../api/api';  // 

// async function loginUser() {
//   const response = await api.post('/users/sign/in', { email, password });
// }


const LoginScreen = ({ navigation }) => {
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
          Alert.alert('Success', 'Login successful!');
          navigation.navigate('Home', { screen: 'HomeScreen' });
        } else {
          Alert.alert('Error', 'Incorrect email or password');
        }
      } else {
        Alert.alert('Error', 'No user found, please sign up first');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred during login');
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
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../../../../assets/icon/google.png')} style={styles.icon} />
        <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
      </TouchableOpacity>

      {/* Veya */}
      <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>

      {/* Email */}
      <Input
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Şifre */}
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Giriş Butonu */}
      <CustomButton
        title="LOG IN"
        onPress={handleLogin}
      />

      {/* Şifremi Unuttum */}
      <Text style={styles.forgotText}>Forgot Password?</Text>

      {/* Kayıt Ol */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          ALREADY HAVE AN ACCOUNT? <Text style={styles.signUpLink}>SIGN UP</Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;
