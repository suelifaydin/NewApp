import { StyleSheet } from 'react-native';
import colors from '../../../../utils/theme/colors';

export default StyleSheet.create({
  scroll: {
    padding: 20,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
   name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3F414E',
    marginTop: 80,
    marginBottom: 8,
  },
   email: {
    fontSize: 15,
    color: '#A1A4B2',
    marginTop: 15,
    marginBottom: 25,
  },
  menuSection: {
    width: '100%',
    marginBottom: 40,
  },
  menuItem: {
    backgroundColor: '#eee',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    color: '#3F414E',
  },

  logoutButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
