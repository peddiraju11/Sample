import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const OptionButton = ({ onPress, children, customButtonStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={customButtonStyle || buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    height: 50
  }
};

export { OptionButton };
