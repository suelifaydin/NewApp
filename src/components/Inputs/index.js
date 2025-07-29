import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showPasswordToggle = false,
  passwordVisible = false,
  onTogglePassword,
  showCheckIcon = false,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9E9E9E"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !passwordVisible}
      />

      {showCheckIcon && (
        <Image
          source={require('../../assets/icons/auth-screen/check.png')}
          style={styles.icon}
        />
      )}

      {showPasswordToggle && (
        <TouchableOpacity onPress={onTogglePassword}>
          <Image
            source={require('../../assets/icons/auth-screen/eye.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 20,
    color: '#000',
  },
  icon: {
    width: 20,
    height: 10,
    marginLeft: 8,
  },
});

export default Input;
