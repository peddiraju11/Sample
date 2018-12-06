import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Textarea = ({ value, onChangeText, placeholder, maxLength  }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor="#565656"
                style={styles.textarea}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                multiline={true}
                numberOfLines={10}
                onChangeText={onChangeText}
                underlineColorAndroid={'transparent'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2A2A',
        marginTop: 10,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20
    },
    textarea: {
        color: '#fff',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        marginLeft: 10,
        marginRight: 10,
        textAlignVertical: 'top'
    }
})

export { Textarea }