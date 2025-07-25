import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0FF',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: 'white',
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
    width: 42,
    height: 42,
    tintColor: 'white',
  },
  playButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(116, 120, 244, 0.45)', // Şeffaf kutu
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  playIcon: {
    width: 42,
    height: 42,
    tintColor: '#FFFFFF',
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
  backgroundColor: 'rgba(240, 217, 237, 0.35)', // Şeffaf kutu
  borderWidth: 1,
  borderColor: 'rgba(240, 217, 237, 0.35)',
},
trackTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
},
trackArtist: {
  fontSize: 14,
  color: 'white',
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
