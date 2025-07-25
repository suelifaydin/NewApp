import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { observer } from 'mobx-react';
import profileStore from '../../store/profileStore';
import lightStyles from './styles/light/index';
import darkStyles from './styles/dark/index';
import LanguageModal from '../../components/LanguageModal';
import { useTranslation } from 'react-i18next';

const ProfileScreen = observer(({ navigation }) => {
  const styles = profileStore.theme === 'dark' ? darkStyles : lightStyles;
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const { t, i18n } = useTranslation();

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

  const getCurrentLanguage = () => {
    switch (i18n.language) {
      case 'tr':
        return { label: 'Türkçe', flag: require('../../assets/icon/flag-tr.png') };
      case 'de':
        return { label: 'Deutsch', flag: require('../../assets/icon/flag-de.png') };
      case 'ru':
        return { label: 'Русский', flag: require('../../assets/icon/flag-ru.png') };
      case 'en':
      default:
        return { label: 'English', flag: require('../../assets/icon/flag-en.png') };
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Profil Bilgileri */}
        <View style={styles.profileSection}>
          <Text style={styles.name}>
            {profileStore.name || t('yourName')}
          </Text>
          <Text style={styles.email}>
            {profileStore.email || t('yourEmail')}
          </Text>
        </View>

        {/* Menü Seçenekleri */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>🔔 {t('notifications')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>⚙️ {t('settings')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>📝 {t('accountDetails')}</Text>
          </TouchableOpacity>

          {/* 🌐 Seçili dili ve bayrağı gösteren buton */}
          <TouchableOpacity
            style={[styles.menuItem, { flexDirection: 'row', alignItems: 'center' }]}
            onPress={() => setLanguageModalVisible(true)}
          >
            <Image
              source={getCurrentLanguage().flag}
              style={{ width: 24, height: 24, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text style={styles.menuText}>{getCurrentLanguage().label}</Text>
          </TouchableOpacity>
        </View>

        {/* Tema Değiştir Butonu */}
        <TouchableOpacity style={styles.menuItem} onPress={handleToggle}>
          <Text style={styles.menuText}>
            {profileStore.theme === 'dark'
              ? t('switchToLight')
              : t('switchToDark')}
          </Text>
        </TouchableOpacity>

        {/* Çıkış */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>{t('logout')}</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 🌐 Language Modal */}
      <LanguageModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
      />
    </ImageBackground>
  );
});

export default ProfileScreen;
