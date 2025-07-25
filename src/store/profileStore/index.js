import { makeAutoObservable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';  
import { getTheme, toggleTheme as toggleThemeUtil } from '../../utils/theme/theme';

const THEME_KEY = '@theme';
const USER_KEY = '@loggedInUser';

class ProfileStore {
  name = '';
  surname = '';
  email = '';
  theme = 'light';

  constructor() {
    makeAutoObservable(this);
    this.loadInitialData();
  }

  favorites = []; // favoriler listesi

addFavorite(track) {
  const exists = this.favorites.find(item => item.id === track.id);
  if (!exists) {
    this.favorites.push(track);
  }
}

removeFavorite(trackId) {
  this.favorites = this.favorites.filter(item => item.id !== trackId);
}

isFavorite(trackId) {
  return this.favorites.some(item => item.id === trackId);
}


  setUser(user) {
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  async loadInitialData() {
    try {
      const userJSON = await AsyncStorage.getItem(USER_KEY);
      const savedTheme = await getTheme();

      runInAction(() => {
        if (userJSON) {
          const user = JSON.parse(userJSON);
          this.setUser(user);
        }
        this.setTheme(savedTheme);
      });
    } catch (error) {
      console.log('Veriler yüklenemedi:', error);
    }
  }

  async toggleTheme() {
    try {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      await AsyncStorage.setItem(THEME_KEY, newTheme);

      runInAction(() => {
        this.theme = newTheme;
      });
    } catch (error) {
      console.log('Tema değiştirilemedi:', error);
    }
  }

  async logout(navigation) {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Splash' }],
      });
    } catch (e) {
      console.log('Çıkış yapılamadı:', e);
    }
  }
}

const profileStore = new ProfileStore();
export default profileStore;
