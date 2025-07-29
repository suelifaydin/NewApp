import profileStore from '../store/index'; 


export const useAppStyles = (styles) => {
  const theme = profileStore.theme;
  const selectedStyles = theme === 'dark' ? styles.dark : styles.light;
  return selectedStyles;
};
