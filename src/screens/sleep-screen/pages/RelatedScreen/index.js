import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import lightStyles from '../RelatedScreen/styles/light';
import darkStyles from '../RelatedScreen/styles/dark';
import { getTheme, setTheme } from '../../../../utils/theme/theme';
import { useNavigation } from '@react-navigation/native';

const RelatedScreen = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState('light');
  

useFocusEffect(
  useCallback(() => {
    const loadTheme = async () => {
      const savedTheme = await getTheme(); // direkt fonksiyonu çağır
      setTheme(savedTheme);
    };
    loadTheme();
  }, [])
);


  const styles = theme === 'dark' ? darkStyles : lightStyles;

  const backgroundImage =
    theme === 'dark'
      ? require('../../../../assets/global/sleep.png')
      : require('../../../../assets/global/bg.png');

  // Temaya göre resimleri ayır
  const sleepMusicData = [
    {
      id: '1',
      title: 'Night Island',
      image:
        theme === 'dark'
          ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '2',
      title: 'Sweet Sleep',
      image:
        theme === 'dark'
             ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '3',
      title: 'Good Night',
      image:
        theme === 'dark'
               ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '4',
      title: 'Moon Clouds',
      image:
        theme === 'dark'
               ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '5',
      title: 'Night Island',
      image:
        theme === 'dark'
          ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '6',
      title: 'Sweet Sleep',
      image:
        theme === 'dark'
             ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '7',
      title: 'Good Night',
      image:
        theme === 'dark'
               ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '8',
      title: 'Moon Clouds',
      image:
        theme === 'dark'
               ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
        {
      id: '9',
      title: 'Good Night',
      image:
        theme === 'dark'
               ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },
    {
      id: '10',
      title: 'Moon Clouds',
      image:
        theme === 'dark'
               ? require('../../../../assets/global/night.png')
          : require('../../../../assets/global/light1.png'),
    },

  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subText}>45 MIN • SLEEP MUSIC</Text>
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../../assets/icon/vector.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Sleep Music</Text>

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
