import { StyleSheet, Dimensions } from 'react-native';
import globalstyle from '../../../assets/global-style';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    ...globalstyle.flexContainer,
    width,
    height,
  },
  container: {
    ...globalstyle.flexContainer,
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
    marginBottom: 275,
  },
  loadingContainer: {
  ...globalstyle.flexContainer,
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingBottom: 30,
},

});
