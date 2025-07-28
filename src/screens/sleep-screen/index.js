import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import profileStore from '../../store/profileStore';
import lightStyles from './styles/light/light';
import darkStyles from './styles/dark/dark';
import { getTheme } from '../../utils/theme/theme';




const SleepScreen = observer(() => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState('light');

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
      ? require('../../assets/global/sleep.png')
      : require('../../assets/global/bg2.png');
  const topImage =
    theme === 'dark'
      ? require('../../assets/global/moonnight.png')
      : require('../../assets/sleep-screen/sun.png');

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
            <Image source={require('../../assets/icon/vector.png')} style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconCircle}>
              <Image source={require('../../assets/icon/heart.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <Image source={require('../../assets/icon/dow.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Bilgi Kutusu */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Night Island</Text>
          <Text style={styles.subTitle}>45 MIN • SLEEP MUSIC</Text>
          <Text style={styles.description}>
            Ease the mind into a restful night’s sleep with these deep, ambient tones.
          </Text>

          {/* Favori ve dinleme */}
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Image source={require('../../assets/icon/heart1.png')} style={styles.statIcon} />
              <Text style={styles.statText}> {profileStore.favorites.length} Favorites</Text>
            </View>
            <View style={styles.statItem}>
              <Image source={require('../../assets/icon/mute.png')} style={styles.statIcon} />
              <Text style={styles.statText}>34.234 Listening</Text>
            </View>
          </View>
        </View>

       {/* FAVORİ MÜZİĞİN VARSA GÖSTER */}
{profileStore.favorites.length > 0 && (
  <View style={styles.relatedSection}>
    <View style={styles.relatedHeader}>
      <Text style={styles.relatedTitle}>Your Favorite Tracks</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RelatedScreen')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
    </View>

   <View style={styles.relatedCards}>
  {profileStore.favorites.map((track) => (
    <View key={track.id} style={styles.card}>
      <Image source={track.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{track.title}</Text>
      <Text style={styles.cardSub}>{track.artist}</Text>
    </View>
  ))}
</View>

  </View>
)}

      </ScrollView>
    </ImageBackground>
  );
});

export default SleepScreen;
