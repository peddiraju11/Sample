import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, AsyncStorage, Alert } from 'react-native'
import { NavigationActions, NavigationState } from 'react-navigation'

import LinearGradient from 'react-native-linear-gradient';

class SideMenu extends Component {

    state = { userDetails:null }

    state = {}

    componentDidMount() {
        AsyncStorage.getItem('userDetails', (err, res) => {
            this.setState({ userDetails:JSON.parse(res) })
        })
    }

    navigateToScreen = (route) => () => {
        
        const navigationAction = NavigationActions.navigate({
            routeName: route
        })
        this.props.navigation.dispatch(navigationAction)
        
    }


  

//     const defaultGetStateForAction = internalDrawer.router.getStateForAction;

// internalDrawer.router.getStateForAction = (action, state) => {
//     if(state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerClose') {
//         alert("dsadas");
//          navigationOptions = ({ navigation }) => ({
//             tabBarVisible: (navigation.state.params && navigation.state.params.hideTabBar) == true,
//             animationEnabled: true
//         })
//     }

//     if(state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerOpen') {
//         alert("dsadas");
//          navigationOptions = ({ navigation }) => ({
//             tabBarVisible: (navigation.state.params && navigation.state.params.hideTabBar) == true,
//             animationEnabled: true
//         })
//     }


//     return defaultGetStateForAction(action, state);
// };

    renderMenu() {
        let menuArray = [
            {
                id:1,
                screen: 'HomeDrawer',
                title: 'Dashboard',
            },
            {
                id:2,
                screen: 'AccountSettings',
                title: 'Account Settings',
            },
            {
                id:3,
                screen: 'NotificationSettings',
                title: 'Notification Settings',
            }
        ]

    }
    // static navigationOptions = ({ navigation }) => ({
    //     tabBarVisible: (navigation.state.params && navigation.state.params.hideTabBar) == true,
    //     animationEnabled: true
    // })

    render() {
        return(
            <View style={{ flex:1, backgroundColor:'#FFFFFF' }}>
                <ScrollView>
                    <View style={{ height: '30%', marginBottom: 80}}>         
                    <LinearGradient 
                        start={{ x: 0, y:0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#1865e5', '#159af6']}
                        style={{height: 200}} >         


                    <View style={{ elevation: 5,}}>
                        <Image
                            source={require('../assets/icons/profile.png')}
                            style={{ height:100, width:100, marginLeft: 10, marginTop: 30, marginBottom: 10 }}
                        />
                    </View>

                    <View>
                    {
                            this.state.userDetails ?
                            
                            <View>
                                    
                                    <Text style={{ fontWeight: "bold", fontSize:15, color: '#FFFFFF', marginLeft: 10 }}>{this.state.userDetails && this.state.userDetails.Details[0].name}</Text>
                                    <Text style={{ fontSize:15, color: '#D7E5E5', marginLeft: 10 }}>{this.state.userDetails && this.state.userDetails.Details[0].email}</Text>
                            </View>
                             
                            :
                            <Text>Loading...</Text>
                    }

                    </View>                    
                    </LinearGradient>  
                    </View>                  
                    
                    <TouchableWithoutFeedback 
                        onPress={this.navigateToScreen('HomeDrawer')}>
                        <View style={styles.menuItemContainer1}>
                            <View  style={{ flexDirection: 'row', }}>
                                <Image
                                    source={require('../assets/icons/dashboard.png')}
                                    style={{ height:20, width:20, marginLeft: 10, marginTop: 2 }}
                                />
                                <Text style={styles.menuText}>{'DASHBOARD'}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>


                        <View style={{width: '100%', height: 1, backgroundColor: "#E5E5E5", alignItems: 'center'}} /> 


                    <TouchableWithoutFeedback 
                        onPress={this.navigateToScreen('AccountSettings')}>
                        <View style={styles.menuItemContainer}>
                            <View  style={{  flexDirection: 'row', }}>
                                <Image
                                    source={require('../assets/icons/account.png')}
                                    style={{ height:20, width:20, marginLeft: 10, marginTop: 2 }}
                                />
                                <Text style={styles.menuText}>{'ACCOUNT SETTINGS'}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>


 
                        <View style={{width: '100%', height: 1, backgroundColor: "#E5E5E5", alignItems: 'center'}} /> 


                    <TouchableWithoutFeedback 
                        onPress={this.navigateToScreen('NotificationSettings')}>
                        <View style={styles.menuItemContainer}>
                            <View  style={{  flexDirection: 'row', }}>
                                <Image
                                    source={require('../assets/icons/noti.png')}
                                    style={{ height:20, width:20, marginLeft: 10, marginTop: 2 }}
                                />
                                <Text style={styles.menuText}>{'NOTIFICATION SETTINGS'}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>


                        <View style={{width: '100%', height: 1, backgroundColor: "#E5E5E5", alignItems: 'center'}} /> 


                    <TouchableWithoutFeedback 
                        onPress={ () => {
                            Alert.alert(
                                'Logout',
                                'Are you sure you want to logout?',
                                [
                                  {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'Yes', onPress: () => {

                                    AsyncStorage.removeItem('userDetails', () => 
                                    {
                                        
                                    });
                                    this.navigateToScreen('Login')();
                                  }},
                                ],
                                { cancelable: false }
                              )
                        }}>
                        <View style={styles.menuItemContainer}>
                            <View  style={{ flexDirection: 'row', }}>
                                <Image
                                    source={require('../assets/icons/logout.png')}
                                    style={{ height:20, width:20, marginLeft: 10, marginTop: 2 }}
                                />
                                <Text style={styles.menuText}>LOGOUT</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </ScrollView>

                <View style={{position: "absolute", bottom: 0}}>
                    <View  style={{  flexDirection: 'row',bottom: 0 }}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ height:35, width:35, marginLeft: 10, }}
                        />
                        <Text style={{marginLeft:15, justifyContent: 'center', alignItems: 'center', marginTop:5,fontWeight: 'bold',color:'#9A9C9E', marginBottom:25,fontSize:14}}>POWERED BY ORB</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    menuItemContainer: {

        flexDirection:'row',
        marginTop:15,
        marginBottom:15
    },


    menuItemContainer1: {

        flexDirection:'row',
        marginBottom:15
    },


    menuImageContainer: {

        justifyContent:'center',
        alignItems:'center',
    },

    menuText: {
        marginLeft:15,
        fontSize: 15,
        color: '#4B4D4E',
    },

})

export default SideMenu