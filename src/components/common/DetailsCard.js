import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailsCard = (props) => {
    return(
        <View style={[styles.cardStyle, props.customStyle]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#2A2A2A',
        borderRadius: 3,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    }
})

export { DetailsCard }