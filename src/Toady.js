import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Today extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Today',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab B</Text>
      </View>
      )
  }
}

export default Today

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
