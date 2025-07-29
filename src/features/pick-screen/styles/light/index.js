import { StyleSheet } from 'react-native';
import globalstyle from '../../../../assets/global-style';

export default StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3F414E',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3F414E',
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    color: '#A1A4B2',
    marginBottom: 20,
  },
  cards: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
});
