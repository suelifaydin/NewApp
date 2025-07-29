import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SplashScreen,
  SignUpSignIn,
  SignInScreen,
  SignUp,
  Welcome,
  RelatedScreen,
} from '../features/index'; 

import TabNavigator from './bottom-menu'; 

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,gestureEnabled:false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignUpSignIn" component={SignUpSignIn} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="RelatedScreen" component={RelatedScreen} />

      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;