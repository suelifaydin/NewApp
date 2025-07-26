import { makeAutoObservable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTheme, toggleTheme as toggleThemeUtil } from '../../utils/theme/theme';
import i18n from '../../local/i18n'; // i18n dosyana göre yolu kontrol et

const THEME_KEY = '@theme';
const USER_KEY = '@loggedInUser';
const LANGUAGE_KEY = '@language';

class ProfileStore {
  name = '';
  surname = '';
  email = '';
  theme = 'light';
  language = 'en'; // varsayılan dil
  favorites = [];

  constructor() {
    makeAutoObservable(this);
    this.loadInitialData();
  }

setUser(user) {
  this.name = user.name;
  this.surname = user.surname;
  this.email = user.email;
}


  // 🔸 Tema
  setTheme(theme) {
    this.theme = theme;
  }

  // 🔸 Favori işlemleri
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

  // 🔸 Dil değiştir
  async changeLanguage(lang) {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, lang);
      i18n.changeLanguage(lang);

      runInAction(() => {
        this.language = lang;
      });
    } catch (error) {
      console.log('Dil değiştirilemedi:', error);
    }
  }

  // 🔸 Verileri yükle
  async loadInitialData() {
    try {
      const userJSON = await AsyncStorage.getItem(USER_KEY);
      const savedTheme = await getTheme();
      const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

      runInAction(() => {
        if (userJSON) {
          const user = JSON.parse(userJSON);
          this.setUser(user);
        }

        this.setTheme(savedTheme);

        if (savedLanguage) {
          this.language = savedLanguage;
          i18n.changeLanguage(savedLanguage); // dil de uygula
        }
      });
    } catch (error) {
      console.log('Veriler yüklenemedi:', error);
    }
  }

  // 🔸 Tema değiştir
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

  // 🔸 Çıkış yap
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
