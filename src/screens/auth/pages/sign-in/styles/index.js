import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  marginBottom: 90,
  marginTop: 90, // Adjusted for better visibility
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
    marginBottom: 100,
    color: '#222',
  },
  fbButton: {
    backgroundColor: '#8E97FD',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 38,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 38,
    paddingVertical: 14,
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
    width: 20,
    height: 20,
    marginRight: 12,
    
  },
  googleText: {
    color: '#3F414E',
    fontWeight: '600',
    fontSize: 14,
  },
  orText: {
    color: '#A1A4B2',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 30,
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#F2F3F7',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 14,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#8E97FD',
    paddingVertical: 15,
    borderRadius: 38,
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 13,
  },
  signUpText: {
    textAlign: 'center',
    color: '#A1A4B2',
    marginTop: 140,
  },
  signUpLink: {
    color: '#8E97FD',
    fontWeight: '600',
  },
  facebookButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#8E97FD', // mor arka plan
  borderRadius: 35,
  height: 50,
  marginBottom: 20,
},

facebookText: {
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: 'bold',
  marginLeft: 10,
},

});

export default styles;
