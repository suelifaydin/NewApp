import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

import { useFocusEffect } from '@react-navigation/native';
import { getTheme } from '../../utils/theme/theme';
import { setupPlayer } from '../../utils/audio/setupPlayer';
import profileStore from '../../store/profileStore';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import * as musicStyles from './styles';

const tracks = [
  {
    id: 'track1',
    titleKey: 'nightIsland',
    artistKey: 'sleepMusic',
    url: require('../../assets/audio/track1.mp3'),
    image: require('../../assets/global/night.png'),
  },
  {
    id: 'track2',
    titleKey: 'oceanWave',
    artistKey: 'calmSound',
    url: require('../../assets/audio/track2.mp3'),
    image: require('../../assets/home-screen/night2.png'),
  },
  {
    id: 'track3',
    titleKey: 'rainDrops',
    artistKey: 'natureRelax',
    url: require('../../assets/audio/track3.mp3'),
    image: require('../../assets/sleep-screen/night3.png'),
  },
  {
    id: 'track4',
    titleKey: 'windyForest',
    artistKey: 'relaxationStation',
    url: require('../../assets/audio/track4.mp3'),
    image: require('../../assets/global/night4.png'),
  },
];

const TrackItem = observer(({ item, playTrack, toggleFavorite, styles, t }) => (
  <View style={styles.trackRow}>
    <TouchableOpacity
      onPress={() => playTrack(item.id)}
      style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
    >
      <Image source={item.image} style={styles.trackImage} />
      <View style={styles.trackTextContainer}>
        <Text style={styles.trackTitle}>{t(item.titleKey)}</Text>
        <Text style={styles.trackArtist}>{t(item.artistKey)}</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => toggleFavorite(item)}>
      <Image
        source={
          profileStore.isFavorite(item.id)
            ? require('../../assets/icon/heart-filled.png')
            : require('../../assets/icon/heart2.png')
        }
        style={styles.heartIcon}
      />
    </TouchableOpacity>
  </View>
));

const PlayerScreen = () => {
  const [theme, setTheme] = useState('light');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState('track1');
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const { t } = useTranslation();
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const togglePlayback = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else if (state === State.Paused || state === State.Ready) {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  const playTrack = async (trackId) => {
    try {
      if (!isPlayerReady) return;

      const track = tracks.find((t) => t.id === trackId);
      if (!track) return;

      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
      setIsPlaying(true);
      setCurrentTrackId(trackId);
    } catch (error) {
      console.log('Track yüklenemedi:', error);
    }
  };

  const toggleFavorite = (track) => {
    if (profileStore.isFavorite(track.id)) {
      profileStore.removeFavorite(track.id);
    } else {
      profileStore.addFavorite(track);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const loadTheme = async () => {
        const savedTheme = await getTheme();
        setTheme(savedTheme);
      };
      loadTheme();
    }, [])
  );

  useEffect(() => {
    const init = async () => {
      try {
        await setupPlayer();
        setIsPlayerReady(true);
      } catch (error) {
        console.error('Player kurulumu başarısız:', error);
      }
    };
    init();
  }, []);
  const styles = musicStyles[theme];
  const backgroundImage =
    theme === 'dark'
      ? require('../../assets/global/sleep.png')
      : require('../../assets/global/bg2.png');

  const seekBackward = async () => {
    const position = progress.position;
    await TrackPlayer.seekTo(Math.max(position - 15, 0));
  };

  const seekForward = async () => {
    const position = progress.position;
    const duration = progress.duration;
    await TrackPlayer.seekTo(Math.min(position + 15, duration));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const currentTrack = tracks.find((t) => t.id === currentTrackId);

  return (
    <ImageBackground source={backgroundImage} style={styles.container} key={theme}>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        extraData={profileStore.favorites}
        renderItem={({ item }) => (
          <TrackItem
            item={item}
            playTrack={playTrack}
            toggleFavorite={toggleFavorite}
            styles={styles}
            t={t}
          />
        )}
        style={styles.trackList}
      />

      <Text style={styles.title}>{t(currentTrack?.titleKey)}</Text>
      <Text style={styles.subTitle}>{t('sleepMusic')}</Text>

      <View style={styles.controls}>
        <TouchableOpacity onPress={seekBackward}>
          <Image source={require('../../assets/global/left.png')} style={styles.controlIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
          <Image
            source={
              isPlaying
                ? require('../../assets/icon/pause.png')
                : require('../../assets/icon/play.png')
            }
            style={styles.playIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={seekForward}>
          <Image source={require('../../assets/global/right.png')} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.slider}>
        <View
          style={[
            styles.progress,
            { width: `${(progress.position / progress.duration) * 100}%` },
          ]}
        />
      </View>

      <View style={styles.timeRow}>
        <Text style={styles.time}>{formatTime(progress.position)}</Text>
        <Text style={styles.time}>{formatTime(progress.duration)}</Text>
      </View>
    </ImageBackground>
  );
};

export default observer(PlayerScreen);
