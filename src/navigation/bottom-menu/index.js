import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  HomeScreen,
  SleepScreen,
  PlayerScreen,
  ProfileScreen,
  PickScreen, 
} from '../../features/index'; // Adjust the import paths as necessary

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { t } = useTranslation();

  const tabIcons = {
    HomeScreen: require('../../assets/icons/buttom-menu/home.png'),
    Sleep: require('../../assets/icons/buttom-menu/sleep1.png'),
    MusicScreen: require('../../assets/icons/buttom-menu/music1.png'),
    Profile: require('../../assets/icons/buttom-menu/profile.png'),
    PickScreen: require('../../assets/icons/buttom-menu/pick.png'),
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          paddingTop: 18,
          height: 90,
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
              width: 39,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15, 
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
        component={PlayerScreen}
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
