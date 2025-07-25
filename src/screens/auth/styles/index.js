import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  logo: {
    width: 170,
    height: 50,
    resizeMode: 'contain',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 22,
    color: '#fff',
    marginTop: 1,
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  illustration: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});
