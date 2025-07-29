import { StyleSheet, Dimensions, Platform } from 'react-native';
import globalstyle from '../../../assets/global-style';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Platform.OS === 'android' ? 30 : 50,
  },
  logo: {
    width: 170,
    height: 50,
    resizeMode: 'contain',
    marginTop: Platform.OS === 'android' ? 10 : 30,
  },
  title: {
    fontSize: Platform.OS === 'android' ? 26 : 30,
    fontWeight: 'bold',
    color: '#FFECCC',
    marginTop: Platform.OS === 'android' ? 30 : 40,
  },
  subtitle: {
    fontSize: Platform.OS === 'android' ? 20 : 22,
    color: '#FFECCC',
    marginBottom: Platform.OS === 'android' ? 15 : 20,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: Platform.OS === 'android' ? 15 : 20,
    fontWeight: '300',
  },
  illustration: {
    width: width,
    height: width,
    resizeMode: 'contain',
    marginBottom: Platform.OS === 'android' ? 20 : 30,
  },
});
