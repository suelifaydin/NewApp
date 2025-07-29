import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../../localization/i18n';

const LanguageModal = ({ visible, onClose }) => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{t('language')}</Text>

          {/* English */}
          <TouchableOpacity onPress={() => changeLanguage('en')} style={styles.optionRow}>
            <Text style={styles.option}>{t('english')}</Text>
            <Image source={require('../../assets/images/flag/flag-en.png')} style={styles.flag} />
          </TouchableOpacity>

          {/* Turkish */}
          <TouchableOpacity onPress={() => changeLanguage('tr')} style={styles.optionRow}>
            <Text style={styles.option}>{t('turkish')}</Text>
            <Image source={require('../../assets/images/flag/flag-tr.png')} style={styles.flag} />
          </TouchableOpacity>

          {/* German */}
          <TouchableOpacity onPress={() => changeLanguage('de')} style={styles.optionRow}>
            <Text style={styles.option}>{t('german')}</Text>
            <Image source={require('../../assets/images/flag/flag-de.png')} style={styles.flag} />
          </TouchableOpacity>

          {/* Russian */}
          <TouchableOpacity onPress={() => changeLanguage('ru')} style={styles.optionRow}>
            <Text style={styles.option}>{t('russian')}</Text>
            <Image source={require('../../assets/images/flag/flag-ru.png')} style={styles.flag} />
          </TouchableOpacity>

          {/* Close */}
          <TouchableOpacity onPress={onClose} style={{ marginTop: 30 }}>
            <Text style={[styles.option, { color: 'red' }]}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 40,
    width: '85%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // <-- Bu önemli!
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  option: {
    fontSize: 18,
  },
  flag: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
});
