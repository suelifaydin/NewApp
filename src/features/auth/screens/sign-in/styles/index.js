import { StyleSheet } from 'react-native';
import globalstyle from '../../../../../assets/global-style';

const styles = StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
    paddingHorizontal: 30,
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
  marginTop: 10,
  marginBottom: 35,
},
backIcon: {
  width: 18,
  height: 18,
  resizeMode: 'contain',
  tintColor: '#3F414E', 
},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    color: '#222',
  },
  googleButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 38,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E6E7F2',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  icon2: {
    width: 24,
    height: 24,
    marginRight: 35,
    
  },
  googleText: {
    color: '#3F414E',
    fontWeight: '600',
    fontSize: 14,
  },
  orText: {
    color: '#A1A4B2',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F2F3F7',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 14,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  forgotText: {
    color: '#3F414E',
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 80,
  },
  signUpText: {
    textAlign: 'center',
    color: '#A1A4B2',
    marginTop: 1,
    marginBottom: 20,
  },
  signUpLink: {
    color: '#8E97FD',
    fontWeight: '600',
  },
  facebookButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#8E97FD', 
  borderRadius: 35,
  marginBottom: 20,
  paddingVertical: 18,
},

facebookText: {
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: 'medium',
  marginRight: 50,
},

});

export default styles;
