import { StyleSheet, Platform, useWindowDimensions } from 'react-native';
import globalstyle from '../../../../../assets/global-style';

const styles = StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? 30 : 60,
    paddingBottom: Platform.OS === 'android' ? 20 : 40,
    justifyContent: 'center',
  },

  backButtonContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 20 : 30,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: '#3F414E',
  },
  title: {
    fontSize: Platform.OS === 'android' ? 24 : 28,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: Platform.OS === 'android' ? 50 : 100,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingVertical: Platform.OS === 'android' ? 12 : 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 25 : 35,
  },
  googleText: {
    color: '#3C3C43',
    marginRight: Platform.OS === 'android' ? 20 : 50,
    fontSize: 14,
    fontWeight: Platform.OS === 'android' ? '500' : '600',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: Platform.OS === 'android' ? 20 : 45,
  },
  orText: {
    textAlign: 'center',
    color: '#A1A4B2',
    fontSize: 14,
    marginBottom: Platform.OS === 'android' ? 25 : 35,
    fontWeight: 'bold',
  },
  privacyText: {
    fontSize: 12,
    color: '#A1A4B2',
    marginBottom: 20,
  },
  privacyLink: {
    color: '#8E97FD',
    fontSize: 12,
    marginLeft: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 'auto',
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#8E97FD',
    borderRadius: 2,
    marginLeft: 3,
    marginTop: 3,
  },
  getStartedButton: {
    backgroundColor: '#8E97FD',
    borderRadius: 30,
    paddingVertical: Platform.OS === 'android' ? 14 : 16,
    alignItems: 'center',
    marginBottom: 30,
  },

  getStartedText: {
    color: '#fff',
    fontWeight: Platform.OS === 'android' ? '500' : '600',
    fontSize: 14,
  },
});

export default styles;
