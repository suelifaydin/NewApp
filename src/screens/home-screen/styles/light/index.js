import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  categoryScroll: {
    flexGrow: 0,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  iconWrapper: {
    backgroundColor: '#E0E0E0',
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
    tintColor: '#3F414E',
  },
  categoryLabel: {
    color: '#3F414E',
    fontSize: 12,
    marginTop: 5,
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
    color: '#3F414E',
  },
  greetingSubText: {
    fontSize: 20,
    color: '#A1A4B2',
    marginTop: 5,
  },
  oceanCard: {
    height: 200,
    width: 359,
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  oceanTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 62,
  },
  oceanDesc: {
    color: 'white',
    fontSize: 16,
    marginBottom: 0,
    paddingLeft: 50,
  },
  oceanDesc2: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 70,
  },
  startButton: {
    backgroundColor: '#8E97FD',
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20,
  },
  startText: {
    color: 'white',
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
    marginTop: 10,
  },
  miniCard: {
  width: '43%',      
  marginBottom: 12,        
  marginHorizontal: '1%',  
},

  miniCardImage: {
    width: 140,
    height: 110,
    borderRadius: 11,
    resizeMode: 'cover',
  },
  miniCardTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F414E',
  },
  miniCardSubtitle: {
    fontSize: 13,
    color: '#54555bff',
    marginTop: 2,
  },
});

export default lightStyles;