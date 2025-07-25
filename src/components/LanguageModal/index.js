import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../../local/i18n';

const LanguageModal = ({ visible, onClose }) => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{t('language')}</Text>

          <TouchableOpacity onPress={() => changeLanguage('en')}>
            <Text style={styles.option}>{t('english')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => changeLanguage('tr')}>
            <Text style={styles.option}>{t('turkish')}</Text>
          </TouchableOpacity>
            
       <TouchableOpacity onPress={() => changeLanguage('de')}>
  <Text style={styles.option}>{t('German')}</Text>
</TouchableOpacity>

        <TouchableOpacity onPress={() => changeLanguage('ru')}>
        <Text style={styles.option}>{t('Russian')}</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
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
    padding: 50,
    width: '85%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    fontSize: 18,
    marginVertical: 20,
  },
});
