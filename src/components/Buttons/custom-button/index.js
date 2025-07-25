import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  backgroundColor = '#8E97FD',
  textColor = '#FFFFFF',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
   backgroundColor: '#8E97FD',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 38,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
