import { StyleSheet } from 'react-native';
import globalstyle from '../../../../../assets/global-style';

const styles = StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
    paddingHorizontal: 20,
    paddingTop: 80,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#333',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    color: '#333',
  },
  list: {
    paddingTop: 10,
  },
  card: {
    ...globalstyle.flexContainer,
    margin: 10,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  subText: {
    fontSize: 12,
    color: '#666',
  },
});

export default styles;
