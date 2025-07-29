import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomCheckbox = ({ isChecked, onToggle, label, checkboxStyle, textStyle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={[styles.checkbox, checkboxStyle]}>
        {isChecked && <View style={styles.checkedBox} />}
      </TouchableOpacity>
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#8E97FD',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#8E97FD',
    borderRadius: 2,
  },
  label: {
    fontSize: 14,
    color: '#3F414E',
  },
});

export default CustomCheckbox;
