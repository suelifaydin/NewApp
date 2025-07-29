/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 🔸 BUNLARI EKLE
import TrackPlayer from 'react-native-track-player';
import TrackPlayerService from './src/utils/audio/service'; // Yol doğruysa böyle kalabilir

// 🔸 TrackPlayer servisini kaydet
TrackPlayer.registerPlaybackService(() => TrackPlayerService);

// 🔸 App componentini kaydet
AppRegistry.registerComponent(appName, () => App);
