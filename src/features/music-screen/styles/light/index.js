import { StyleSheet } from 'react-native';
import globalstyle from '../../../../assets/global-style';

export default StyleSheet.create({
  container: {
    ...globalstyle.flexContainer,
    backgroundColor: '#E6F0FF',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#03174C',
    textAlign: 'center',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: '#6C7B8A',
    textAlign: 'center',
    marginBottom: 24,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 40,
  },
  controlIcon: {
    width: 35,
    height: 35,
    tintColor: 'black',
  },
   playButton: {
  width: 60,
  height: 60,
  borderRadius: 30, 
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
},
 playIcon: {
    width: 30,
    height: 32,
    tintColor: '#FFFFFF',
    marginLeft: 4,
  },
  slider: {
    width: '100%',
    height: 6,
    backgroundColor: '#D0D7E2',
    borderRadius: 3,
    marginBottom: 20,
  },
  progress: {
    height: 6,
    backgroundColor: '#4B5FFF',
    borderRadius: 3,
    width: '0%',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  time: {
    color: '#6C7B8A',
    fontSize: 13,
  },
  trackList: {
    marginBottom: 20,
  },
 trackRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 12,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 20,
  backgroundColor: 'rgba(54, 49, 56, 0.1)', // Şeffaf kutu
  borderWidth: 1,
  borderColor: 'rgba(81, 73, 84, 0.2)',
},

  trackTitle: {
    fontSize: 16,
    color: '#03174C',
  },
  trackTextContainer: {
  ...globalstyle.flexContainer,
},

trackTitle: {
  fontSize: 16,
  fontWeight: 'bold',
},

trackArtist: {
  fontSize: 14,
},
trackImage: {
  width: 50,
  height: 50,
  borderRadius: 12,
  marginRight: 12,
},
heartIcon: {
  width: 24,
  height: 24,
  resizeMode: 'contain',
},


});
