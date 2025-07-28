import profileStore from '../store/profileStore'; // ✅ DOĞRU


export const useAppStyles = (styles) => {
  const theme = profileStore.theme;
  console.log('Current theme:', theme); // ✅ DOĞRU
  const selectedStyles = theme === 'dark' ? styles.dark : styles.light;
  console.log('Selected styles efe:', selectedStyles); // ✅ DOĞRU
  return selectedStyles;
};
