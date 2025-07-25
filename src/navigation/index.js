import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Giriş ekranları
import SplashScreen from '../screens/splash-screen';
import SignUpSignIn from '../screens/auth/pages/sign-up-sign-in';
import SignInScreen from '../screens/auth/pages/sign-in';
import SignUp from '../screens/auth/pages/sign-up';
import Welcome from '../screens/auth';
import RelatedScreen from '../screens/sleep-screen/pages/RelatedScreen';

// Ana uygulama ekranları (tab'lı)
import TabNavigator from './bottom-menu'; // Tab navigation burada

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignUpSignIn" component={SignUpSignIn} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="RelatedScreen" component={RelatedScreen} />

      {/* TabNavigator: Home, Profile vs. burada */}
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;