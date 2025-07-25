import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { observer } from 'mobx-react';
import profileStore from '../../store/profileStore';
import lightStyles from './styles/light/index';
import darkStyles from './styles/dark/index';

const ProfileScreen = observer(({ navigation }) => {

  const styles = profileStore.theme === 'dark' ? darkStyles : lightStyles;

  const handleLogout = () => {
    profileStore.logout(navigation);
  };

  const handleToggle = () => {
    profileStore.toggleTheme();
  };

  const backgroundImage =
    profileStore.theme === 'dark'
      ? require('../../assets/global/sleep.png')
      : require('../../assets/global/bg.png');


  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Profil Bilgileri */}
        <View style={styles.profileSection}>
          <Text style={styles.name}>
            {profileStore.name || 'Your Name'}
          </Text>
          <Text style={styles.email}>
            {profileStore.email || 'your@email.com'}
          </Text>
        </View>

        {/* Menü Seçenekleri */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>🔔 Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>🎯 Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>⚙️ Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>📝 Account Details</Text>
          </TouchableOpacity>


        </View>

        {/* Tema Değiştir Butonu */}
        <TouchableOpacity style={styles.menuItem} onPress={handleToggle}>
          <Text style={styles.menuText}>
            {profileStore.theme === 'dark'
              ? '🌞 Switch to Light Mode'
              : '🌙 Switch to Dark Mode'}
          </Text>
        </TouchableOpacity>

        {/* Çıkış */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

    </ImageBackground>
  );
});

export default ProfileScreen;
