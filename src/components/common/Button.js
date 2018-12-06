import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, customButtonStyle, disabled }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, customButtonStyle]} disabled={disabled}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#249CF3',
    justifyContent: 'center',
    height: 50
  }
};

export { Button };
