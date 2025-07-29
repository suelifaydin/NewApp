import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import lightStyles from './styles/light';
import darkStyles from './styles/dark';
import { getTheme } from '../../../../utils/theme/theme';

const RelatedScreen = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation();


  useFocusEffect(
    useCallback(() => {
      const loadTheme = async () => {
        const savedTheme = await getTheme();
        setTheme(savedTheme);
      };
      loadTheme();
    }, [])
  );

  const styles = theme === 'dark' ? darkStyles : lightStyles;

  const backgroundImage =
    theme === 'dark'
      ? require('../../../../assets/images/global/sleep.png')
      : require('../../../../assets/images/global/bg.png');

  const sleepMusicData = [
    { id: '1', titleKey: 'nightIsland' },
    { id: '2', titleKey: 'sweetSleep' },
    { id: '3', titleKey: 'goodNight' },
    { id: '4', titleKey: 'moonClouds' },
    { id: '5', titleKey: 'nightIsland' },
    { id: '6', titleKey: 'sweetSleep' },
    { id: '7', titleKey: 'goodNight' },
    { id: '8', titleKey: 'moonClouds' },
    { id: '9', titleKey: 'goodNight' },
    { id: '10', titleKey: 'moonClouds' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={
          theme === 'dark'
            ? require('../../../../assets/images/global/night.png')
            : require('../../../../assets/images/global/light1.png')
        }
        style={styles.image}
      />
      <Text style={styles.title}>{t(item.titleKey)}</Text>
      <Text style={styles.subText}>45 MIN • {t('sleepMusic')}</Text>
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../../assets/icons/global-icon/vector.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.header}>{t('sleepMusic')}</Text>

      <FlatList
        data={sleepMusicData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </ImageBackground>
  );
};

export default RelatedScreen;
