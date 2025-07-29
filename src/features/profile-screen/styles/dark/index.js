import { StyleSheet } from 'react-native';
import colors from '../../../../utils/theme/colors';

export default StyleSheet.create({
  scroll: {
    padding: 24,
    paddingTop: 10,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: '#fff2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: colors.quinary,
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
