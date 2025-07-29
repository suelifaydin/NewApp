import React from 'react';
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import * as pickStyles from './styles';
import { useAppStyles } from '../../hooks'; 
import profileStore from '../../store/index';

const PickScreen = observer(() => {
  const styles = useAppStyles(pickStyles);
  const { t } = useTranslation();

  const backgroundImage =
    profileStore.theme === 'dark'
      ? require('../../assets/images/global/sleep.png')
      : require('../../assets/images/global/bg.png');

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      key={styles}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.title}>{t('pickTitle1')}</Text>
        <Text style={styles.subtitle}>{t('pickTitle2')}</Text>
        <Text style={styles.caption}>{t('pickSubtitle')}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.cards}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/images/pick-screen/anxiety.png')}
            style={[styles.image, { height: 190 }]}
          />
          <Image
            source={require('../../assets/images/pick-screen/performance.png')}
            style={[styles.image, { height: 160 }]}
          />
        </View>

        <View style={styles.row1}>
          <Image
            source={require('../../assets/images/pick-screen/sleep3.png')}
            style={[styles.image, { height: 160 }]}
          />
          <Image
            source={require('../../assets/images/pick-screen/anxiety.png')}
            style={[styles.image, { height: 210 }]}
          />
        </View>

        <View style={styles.row2}>
          <Image
            source={require('../../assets/images/pick-screen/growth.png')}
            style={[styles.image, { height: 180 }]}
          />
          <Image
            source={require('../../assets/images/pick-screen/sleep3.png')}
            style={[styles.image, { height: 160 }]}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
});


export default PickScreen;
