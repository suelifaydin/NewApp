import { StyleSheet, Dimensions } from 'react-native';
import globalstyle from '../../../../../assets/global-style';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
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
    marginBottom: 20,
  },
  loginLink: {
    color: '#8E97FD',
    fontWeight: 'bold',
  },
  languageButton: {
  position: 'absolute',
  top: 85,
  right: 20,
  padding: 5,
  borderRadius: 20,
  backgroundColor: 'hsla(253, 89%, 47%, 0.26)',
},
languageIcon: {
  width: 35,
  height: 22,
  resizeMode: 'contain',
},

});

export default styles;
