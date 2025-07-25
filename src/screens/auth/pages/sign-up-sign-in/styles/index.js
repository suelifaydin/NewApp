import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3F414E',
    marginHorizontal: 5,
  },
  logoIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  illustration: {
    width: 300,
    height: 300,
    marginBottom: 200,
  },
  loginText: {
    color: '#A1A4B2',
    fontSize: 14,
    marginTop: 0,
  },
  loginLink: {
    color: '#8E97FD',
    fontWeight: 'bold',
  },
});

export default styles;
