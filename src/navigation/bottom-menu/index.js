import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../../screens/home-screen';
import SleepScreen from '../../screens/sleep-screen';
import MusicScreen from '../../screens/music-screen';
import ProfileScreen from '../../screens/profile-screen';
import PickScreen from '../../screens/pick-screen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#121641', // koyu mavi
          height: 70,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          switch (route.name) {
            case 'HomeScreen':
              icon = require('../../assets/icon/home.png');
              break;
            case 'Sleep':
              icon = require('../../assets/buttom-menu/sleep1.png');
              break;
            case 'MusicScreen':
              icon = require('../../assets/icon/music1.png');
              break;
            case 'Profile':
              icon = require('../../assets/buttom-menu/profile.png');
              break;
            case 'PickScreen':
              icon = require('../../assets/buttom-menu/pick.png');
              break;
          }

          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#8E97FD' : '#A1A4B2',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#8E97FD',
        tabBarInactiveTintColor: '#A1A4B2',
      })}
    >
      
      <Tab.Screen name="Sleep" component={SleepScreen} options={{ tabBarLabel: 'History' }} />
      <Tab.Screen name="MusicScreen" component={MusicScreen} options={{ tabBarLabel: 'Music' }} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="PickScreen" component={PickScreen} options={{ tabBarLabel: 'Pick' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
