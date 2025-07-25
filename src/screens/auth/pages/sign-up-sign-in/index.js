import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CustomButton from '../../../../components/Buttons/custom-button/index';


const SignUpSignIn = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../../assets/global/bg.png')}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Silent</Text>
        <Image
          source={require('../../../../assets/global/logo.png')}
          style={styles.logoIcon}
        />
        <Text style={styles.logoText}>Moon</Text>
      </View>

      <Image
        source={require('../../../../assets/global/girl.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

   <CustomButton
  title="SIGN UP"
  onPress={() => navigation.navigate('SignUp')}
  backgroundColor="#8E97FD"
  textColor="#FFFFFF"
/>


      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>
          ALREADY HAVE AN ACCOUNT?
          <Text style={styles.loginLink}> LOG IN</Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUpSignIn;
