import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const TopLoader = () => {
    return(
        <View style={styles.loading}>
            <ActivityIndicator size="large" color='#2AA564' />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export { TopLoader }