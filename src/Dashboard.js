import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'

class Dashboard extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Dashboard',
  })

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab A</Text>
      </View>
    )
  }
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
