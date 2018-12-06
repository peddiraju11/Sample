import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({  customContainer, value, onChangeText, 
                  placeholder, secureTextEntry, maxLength,
                  keyboardType, editable, onSubmitEditing,
                  underlineColorAndroid, autoFocus }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={customContainer || containerStyle}>
      <TextInput
        placeholderTextColor="#000000"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        keyboardType={ keyboardType || 'default'}
        underlineColorAndroid={underlineColorAndroid || 'transparent'}
        editable={editable}
        autoFocus={autoFocus}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    marginLeft: 10,
    marginRight: 10
  },
  containerStyle: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fdc400',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    height: 50
  }
};

export { Input };
