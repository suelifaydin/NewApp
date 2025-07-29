import React, { useState, useEffect } from 'react';
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

import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import profileStore from '../../store/index';
import * as musicStyles from './styles';
import { useAppStyles } from '../../hooks';
import { setupPlayer } from '../../utils/audio/setupPlayer';

const tracks = [
  {
    id: 'track1',
    titleKey: 'nightIsland',
    artistKey: 'sleepMusic',
    url: require('../../assets/audio/track1.mp3'),
    image: require('../../assets/images/global/night.png'),
  },
  {
    id: 'track2',
    titleKey: 'oceanWave',
    artistKey: 'calmSound',
    url: require('../../assets/audio/track2.mp3'),
    image: require('../../assets/images/home-screen/night2.png'),
  },
  {
    id: 'track3',
    titleKey: 'rainDrops',
    artistKey: 'natureRelax',
    url: require('../../assets/audio/track3.mp3'),
    image: require('../../assets/images/sleep-screen/night3.png'),
  },
  {
    id: 'track4',
    titleKey: 'windyForest',
    artistKey: 'relaxationStation',
    url: require('../../assets/audio/track4.mp3'),
    image: require('../../assets/images/global/night4.png'),
  },
];

const TrackItem = observer(({ item, playTrack, toggleFavorite, styles, t }) => {
  const isFav = profileStore.isFavorite(item.id);

  // Kısa basışta sadece ekler
  const handleFavoritePress = () => {
    if (!isFav) {
      toggleFavorite(item);
    }
  };

  // Uzun basışta sadece çıkarır
  const handleFavoriteLongPress = () => {
    if (isFav) {
      toggleFavorite(item);
    }
  };

  return (
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

      <TouchableOpacity
        onPress={handleFavoritePress}
        onLongPress={handleFavoriteLongPress}
        delayLongPress={3000} // 3 saniyede uzun basma olarak algılar
      >
        <Image
          source={
            isFav
              ? require('../../assets/icons/global-icon/heart-filled.png')
              : require('../../assets/icons/global-icon/heart2.png')
          }
          style={styles.heartIcon}
        />
      </TouchableOpacity>
    </View>
  );
});


const PlayerScreen = observer(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState('track1');
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const { t } = useTranslation();
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const styles = useAppStyles(musicStyles); 

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

  const backgroundImage =
    styles === musicStyles.dark
      ? require('../../assets/images/global/sleep.png')
      : require('../../assets/images/global/bg2.png');

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
    <ImageBackground source={backgroundImage} style={styles.container}>
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
          <Image source={require('../../assets/images/global/left.png')} style={styles.controlIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
          <Image
            source={
              isPlaying
                ? require('../../assets/icons/music-screen/pause.png')
                : require('../../assets/icons/music-screen/play.png')
            }
            style={styles.playIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={seekForward}>
          <Image source={require('../../assets/images/global/right.png')} style={styles.controlIcon} />
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
});

export default PlayerScreen;