import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#03174C',
  },
  categoryScroll: {
    flexGrow: 0,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  iconWrapper: {
    backgroundColor: '#979797',
    width: 60,
    height: 60,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCategory: {
    alignItems: 'center',
    marginRight: 20,
  },
  activeCategoryLabel: {
    color: '#8E97FD',
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  categoryLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
  },
  activeIconWrapper: {
    backgroundColor: '#8E97FD',
  },
  greetingContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8E97FD',
  },
  greetingSubText: {
    fontSize: 20,
    color: '#A1A4B2',
    marginTop: 5,
  },
  oceanCard: {
    height: 200,
    width: 340,
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  oceanTitle: {
    color: '#FFECCC',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 62,
  },
  oceanDesc: {
    color: '#EBEAEC',
    fontSize: 16,
    marginBottom: 0,
    paddingLeft: 50,
  },
  oceanDesc2: {
    color: '#EBEAEC',
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 70,
  },
  startButton: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20,
  },
  startText: {
    color: '#3F414E',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardScrollContainer: {
    height: 350,
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
 miniCard: {
  width: 155,        
  marginBottom: 50,
  marginHorizontal: 1,     
},
miniCardImage: {
  width: '100%',
  height: 100,         
  borderRadius: 15,
  resizeMode: 'cover',
  marginBottom: 5,
},
  miniCardTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  miniCardSubtitle: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop: 2,
  },
});

export default darkStyles;
