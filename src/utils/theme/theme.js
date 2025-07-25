import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem('@theme');
    return theme || 'light';
  } catch (error) {
    console.error('Tema okunamadı:', error);
    return 'light';
  }
};

export const toggleTheme = async (currentTheme) => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  await AsyncStorage.setItem('@theme', newTheme);
  return newTheme;
};
