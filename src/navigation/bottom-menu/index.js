import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import HomeScreen from '../../screens/home-screen';
import SleepScreen from '../../screens/sleep-screen';
import MusicScreen from '../../screens/music-screen';
import ProfileScreen from '../../screens/profile-screen';
import PickScreen from '../../screens/pick-screen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { t } = useTranslation();

  const tabIcons = {
    HomeScreen: require('../../assets/icon/home.png'),
    Sleep: require('../../assets/buttom-menu/sleep1.png'),
    MusicScreen: require('../../assets/icon/music1.png'),
    Profile: require('../../assets/buttom-menu/profile.png'),
    PickScreen: require('../../assets/buttom-menu/pick.png'),
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          paddingTop: 10,
          height: 85,
          paddingBottom: 10,
          backgroundColor: '#03174D',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: 'absolute',
          left: 10,
          right: 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
        },
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              backgroundColor: focused ? '#8E97FD' : 'transparent',
              borderRadius: 15,
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={tabIcons[route.name]}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#FFFFFF' : '#A1A4B2',
              }}
              resizeMode="contain"
            />
          </View>
        ),
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A1A4B2',
      })}
    >
      <Tab.Screen
        name="Sleep"
        component={SleepScreen}
        options={{ tabBarLabel: t('history') }}
      />
      <Tab.Screen
        name="MusicScreen"
        component={MusicScreen}
        options={{ tabBarLabel: t('music') }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: t('home') }}
      />
      <Tab.Screen
        name="PickScreen"
        component={PickScreen}
        options={{ tabBarLabel: t('pick') }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: t('profile') }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
