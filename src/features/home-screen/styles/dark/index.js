import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardGap = 14;
const cardWidth = (width - 2 * 20 - cardGap) / 2;

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  greetingContainer: {
    marginTop: 10,
  },
   greetingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8E97FD',
  },
  greetingSubText: {
    fontSize: 18,
    color: 'white',
    marginTop: 5,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 40,
    marginTop: 20,
  },
  activeCategory: {
    alignItems: 'center',
    marginRight: 20,
  },
  iconWrapper: {
    backgroundColor: '#aaa3aaff',
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconWrapper: {
    backgroundColor: '#8E97FD',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#3F414E',
  },
  categoryLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
  },
  activeCategoryLabel: {
    color: '#8E97FD',
    fontWeight: 'bold',
  },
  oceanCard: {
    height: 247,
    width: 365,
    alignSelf: 'center',
    padding: 30,
    justifyContent: 'center',
    borderRadius: 17,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 9,
  },
  oceanTitle: {
    color: '#FFE7BF',
    fontSize: 36,
    fontWeight: 'Semibold',
    paddingLeft: 20,
  },
  oceanDesc: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 50,
    marginTop: 10,
  },
  oceanDesc2: {
    color: 'white',
    fontSize: 15,
    marginBottom: 20,
    paddingLeft: 65,
  },
  startButton: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  startText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 12,
  },
  cardScrollContainer: {
    marginTop: 20,
    marginBottom: 80,
    flexGrow: 1,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  miniCard: {
    width: cardWidth,
    marginBottom: 30,
  },
  miniCardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  miniCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  miniCardSubtitle: {
    fontSize: 13,
    color: '#A1A4B2',
    marginTop: 2,
  },
});

export default darkStyles;
