import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
  marginBottom: 110,
},
backIcon: {
  width: 18,
  height: 18,
  resizeMode: 'contain',
  tintColor: '#3F414E', 
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 50,
  },
 
  googleButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  googleText: {
    color: '#3C3C43',
    marginLeft: 8,
    fontWeight: '600',
  },
  icon: {
    width: 25,
    height: 25,
  },
  orText: {
    textAlign: 'center',
    color: '#A1A4B2',
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  inputContainer2: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#000',
  },
   input2: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#000',
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  privacyText: {
    marginLeft: 8,
    color: '#A1A4B2',
    
  },
  privacyLink: {
    color: '#8E97FD',
  },
  getStartedButton: {
    backgroundColor: '#8E97FD',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 50,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkbox: {
  width: 24,
  height: 24,
  borderWidth: 2,
  borderColor: '#8E97FD',
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 131, // text ile arasında boşluk olsun
},

checkedBox: {
  width: 12,
  height: 12,
  backgroundColor: '#8E97FD',
  borderRadius: 2,
},

});