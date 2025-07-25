import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3F414E',
    marginTop: 100,
  },
  email: {
    fontSize: 15,
    color: '#A1A4B2',
    marginTop: 15,
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
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});

export default styles;
