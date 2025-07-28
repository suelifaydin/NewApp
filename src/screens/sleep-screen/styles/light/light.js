import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topImage: {
    width: width,
    height: 300,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  topImageRadius: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconCircle: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#8E97FD',
  },
  infoBox: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#3F414E',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    color: '#7A7A7A',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#7A7A7A',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  statText: {
    color: '#3F414E',
    fontWeight: '600',
    fontSize: 14,
  },
  relatedSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  relatedTitle: {
    color: '#3F414E',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  relatedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 7,
    marginBottom: 10,
  },
  seeAll: {
    fontSize: 17,
    color: '#3F414E',
    fontWeight: 'bold',
  },
relatedCards: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},
card: {
  width: '48%',
  marginBottom: 20,
  borderRadius: 12,
  overflow: 'hidden',
},
cardImage: {
  width: '100%',
  height: 110,
  borderRadius: 12,
  resizeMode: 'cover',
},
cardTitle: {
  marginTop: 6,
  fontSize: 15,
  fontWeight: 'bold',
  color: '#000',
},

cardSub: {
  fontSize: 13,
  color: '#777',
},
  playButton: {
    backgroundColor: '#8E97FD',
    paddingVertical: 16,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
 
  },
  
});
