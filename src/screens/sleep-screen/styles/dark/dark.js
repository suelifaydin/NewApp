import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03174C',
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
    backgroundColor: '#3F414Eaa',
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  infoBox: {
  padding: 20,
},

title: {
  fontSize: 24,
  color: 'white',
  fontWeight: 'bold',
  marginBottom: 5,
},

subTitle: {
  color: '#B5B8C3',
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 10,
},

description: {
  color: '#B5B8C3',
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
  color: 'white',
  fontWeight: '600',
  fontSize: 14,
},
relatedSection: {
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 20,
},

relatedTitle: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 15,
},
relatedHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 5,
  marginBottom: 10,
},
seeAll: {
  fontSize: 17,
  color: 'white',
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
  color: 'white',
},

cardSub: {
  fontSize: 13,
  color: 'white',
},
playButton: {
  backgroundColor: '#8E97FD',
  paddingVertical: 16,
  marginHorizontal: 20,
  borderRadius: 30,
  alignItems: 'center',
},

playButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

});
