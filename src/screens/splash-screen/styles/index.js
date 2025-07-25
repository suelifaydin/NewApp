import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F414E',
    marginHorizontal: 8,
  },
  logoIcon: {
    width: 30,
    height: 30,
  },
  illustration: {
    width: width * 0.75,
    height: height * 0.45,
    marginBottom: 360,
  },
});
