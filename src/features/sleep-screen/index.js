import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import profileStore from '../../store/index';
import * as sleepStyles from './styles';
import { useAppStyles } from '../../hooks';
import { useTranslation } from 'react-i18next';

const SleepScreen = observer(() => {
  const navigation = useNavigation();
  const styles = useAppStyles(sleepStyles);
  const theme = profileStore.theme;
  const { t } = useTranslation();

  const backgroundImage =
    theme === 'dark'
      ? require('../../assets/images/global/sleep.png')
      : require('../../assets/images/global/bg2.png');

  const topImage =
    theme === 'dark'
      ? require('../../assets/images/global/moonnight.png')
      : require('../../assets/images/sleep-screen/sun.png');

  const heartIcon =
  theme === 'dark'
    ? require('../../assets/icons/home-screen/heart.png')
    : require('../../assets/icons/global-icon/heart3.png');

const muteIcon =
  theme === 'dark'
    ? require('../../assets/icons/global-icon/mute.png')
    : require('../../assets/icons/global-icon/mute2.png');


  return (
    <ImageBackground source={backgroundImage} style={styles.container} key={theme}>
      {/* Üst görsel */}
      <ImageBackground
        source={topImage}
        style={styles.topImage}
        imageStyle={styles.topImageRadius}
      >
        <View style={styles.topIcons}>
          <TouchableOpacity
            style={styles.iconCircle}
            onPress={() => navigation.navigate('Home', { screen: 'HomeScreen' })}
          >
            <Image source={require('../../assets/icons/global-icon/vector.png')} style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconCircle}>
              <Image source={require('../../assets/icons/home-screen/heart.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <Image source={require('../../assets/icons/global-icon/dow.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Bilgi Kutusu */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>{t('night_island')}</Text>
          <Text style={styles.subTitle}>{t('duration_sleep_music')}</Text>
          <Text style={styles.description}>{t('night_island_description')}</Text>

          {/* Favori ve dinleme */}
          <View style={styles.stats}>
  <View style={styles.statItem}>
    <Image source={heartIcon} style={styles.statIcon} />
    <Text style={styles.statText}>
      {profileStore.favorites.length} {t('favorites')}
    </Text>
  </View>

  <View style={styles.statItem}>
    <Image source={muteIcon} style={styles.statIcon} />
    <Text style={styles.statText}>34.234 {t('listening')}</Text>
  </View>
</View>

        </View>

        {/* Favori Müzikler */}
        <View style={styles.relatedSection}>
          <View style={styles.relatedHeader}>
            <Text style={styles.relatedTitle}>{t('your_favorite_tracks')}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RelatedScreen')}>
              <Text style={styles.seeAll}>{t('see_all')}</Text>
            </TouchableOpacity>
          </View>

          {profileStore.favorites.length > 0 ? (
            <View style={styles.relatedCards}>
              {profileStore.favorites.map((track) => (
                <View key={track.id} style={styles.card}>
                  <Image source={track.image} style={styles.cardImage} />
                  <Text style={styles.cardTitle}>{track.title}</Text>
                  <Text style={styles.cardSub}>{track.artist}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.noFavoritesText}>{t('no_favorite_tracks')}</Text>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
});

export default SleepScreen;
