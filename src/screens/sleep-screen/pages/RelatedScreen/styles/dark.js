import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    color: 'white',
  },
  list: {
    paddingTop: 10,
  },
  card: {
    flex: 1,
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
    color: 'white',
  },
  subText: {
    fontSize: 12,
    color: '#CCCCCC',
  },
});

export default styles;
