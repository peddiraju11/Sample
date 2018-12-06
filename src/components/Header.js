import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { NavigationActions, NavigationState, StackNavigator } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient';

class SimpleHeader extends Component {

    navigateToScreen = (route) => () => {
        const navigationAction = NavigationActions.navigate({
            routeName: route
        })
        this.props.navigation.dispatch(navigationAction)
    }

    renderButtonAccordingly(goBack, toggleDrawer, close, navigation) {
        if(goBack) {
            return (
                <TouchableOpacity
                    onPress={ () => navigation.goBack() || navigation.navigate('Home') }>
                    <Image 
                        source={require('../assets/icons/back.png')} 
                        style={styles.iconStyle}
                    />
                </TouchableOpacity>
            )
        } else if (toggleDrawer) {
            return (
                <TouchableOpacity
                    onPress={ ()=> {tabBarVisible: false; navigation.navigate('DrawerToggle') }}>
                    <Image 
                        source={require('../assets/icons/menu.png')} 
                        style={styles.iconStyle} 
                    />
                </TouchableOpacity>
            )
        } else if (close) {
        
            return(
                <TouchableOpacity
                    onPress={ ()=> navigation.navigate('Login') }>
                    <Image 
                        source={require('../assets/icons/close.png')} 
                        style={styles.iconStyle} 
                    />
                </TouchableOpacity>
            )
        } else {
            return(
                <View>
                    <View style={{ height:60, width:20 }}></View>
                </View>
            )
        }
    }

    render() {
        const { title, navigation, goBack, toggleDrawer, close, locationHeader,
            search, filter, notification, bgColor } = this.props
        return(
            <SafeAreaView style={styles.safeArea}>

            <View>
                <LinearGradient 
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }}
    colors={['#1865e5', '#159af6']}
    style = { styles.container }>
                { this.renderButtonAccordingly(goBack, toggleDrawer, close, navigation, bgColor) }

                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>{title}</Text>
                </View>
 
  </LinearGradient>
              </View>

            </SafeAreaView>
        )
    }
}





const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold"
    },
    iconStyle: {
        tintColor: '#ffffff',
        height:20,
        width:20,
        marginTop: 17,
        marginRight:20,
        marginBottom:20,
        marginLeft: 15,
        alignSelf:'flex-end',
    },
    locationHeaderTextTitle: {
        marginTop:10,
        color: '#000',
    }, 
    locationHeaderCityText: {
        alignSelf:'flex-start',
        color:'#034ec6'
    },
    safeArea: {
    backgroundColor: '#1865e5'
  }
})


export default SimpleHeader