import React, { Component } from 'react'
import { View, Image, StyleSheet, } from 'react-native'
import SInfo from 'react-native-sensitive-info';

class Splash extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Splash',
    })

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        setTimeout(() => {

            SInfo.getItem('user_name', {}).then(value => {
                console.log(value) //value2

                if (value)
                    this.props.navigation.navigate('Dashboard')
                else
                    this.props.navigation.navigate('Login')

            });


        }, 3000)

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/screen1.png')} style={{ height: '100%', width: '100%' }} />
            </View>
        )
    }
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
})
