import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03174C',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    color: '#A1A4B2',
    marginBottom: 20,
  },
  cards: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  image: {
    width: '48%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
});
