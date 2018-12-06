import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, Image, Keyboard, ImageBackground, BackHandler,TouchableHighlight } from 'react-native'
import { Button } from './components/common'
import { TextField } from 'react-native-material-textfield'
import SInfo from 'react-native-sensitive-info';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Login extends Component {

    state = { email: '', password: '' }


    static navigationOptions = { header: null }
    
    constructor (props) {
        super(props)
    }

    //static navigationOptions = ({ navigation }) => 
    //    title: 'Login',
    //  })


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

        SInfo.setItem('key1', 'value1', {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
        }).then((value) =>
            console.log(value) //value 1
        );

        SInfo.setItem('key2', 'value2', {});

        SInfo.getItem('key2', {}).then(value => {
            console.log(value) //value2
        });

        return (

            <KeyboardAwareScrollView>

                <View style={styles.container}>

                    <ImageBackground source={require('./assets/loginbg.png')} style={{ height: '100%', width: '100%' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Image source={require('./assets/logo.png')} style={{
                                height: 150, width: 148, alignItems: 'center',
                                justifyContent: 'center', marginTop: 50, marginBottom: 40
                            }} />

                        </View>

                        <View style={styles.container_input}>

                            <TextField
                                onSubmitEditing={() => { this.password11.focus(); }}
                                blurOnSubmit={false}
                                baseColor={"black"}
                                tintColor={"grey"}
                                label={'User Name'}
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(email) => {
                                    this.setState({ email })
                                }} />

                            <TextField
                                ref={(input) => { this.password11 = input; }}
                                baseColor={"black"}
                                tintColor={"grey"}
                                label={'Password'}
                                keyboardType='default'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(password) => {
                                    this.setState({ password })
                                }} />
                        </View>

                        <TouchableHighlight
                            style={styles.submit_btn}>
                            <Button onPress={() => { this.submitLogin() }} >
                                <Text style={styles.signin_txt} >SIGN IN</Text>
                            </Button>
                        </TouchableHighlight>

                        <Text style={styles.forgot_txt}>Forgot Password?</Text>

                        <View style={styles.newuser_container}>
                            <Text style={styles.newuser_text}>New User?</Text>
                            <Text style={styles.register_text}>Register Here</Text>
                        </View>

                    </ImageBackground>

                </View>

            </KeyboardAwareScrollView>
        )
    }

    submitLogin() {

        Keyboard.dismiss()

        if (this.state.email.length && this.state.password.length) {

            SInfo.setItem('user_name', this.state.email, {});
            SInfo.setItem('password', this.state.password, {});
           // SInfo.setItem('is_logged', true, {});


            this.props.navigation.navigate('Dashboard');
           // this.props.navigation.navigate('Item', { title: "one" })


        } else {
            Alert.alert('ORB Energy', 'Please enter a valid Email and Password',
                [{ text: 'Ok', style: 'cancel' }])
        }
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    container_input: {
        margin: 8,
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20
    },

    submit_btn: {
        height: 50,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },

    signin_txt: {
        fontWeight: 'bold'
    },

    forgot_txt: {
        color: '#000',
        marginLeft: 15,
        textAlignVertical: "center",
        fontSize: 12,
        textAlign: 'right',
        marginRight: 20,
        marginTop: 10
    },

    newuser_container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        marginTop: 90
    },
    newuser_text: {
        color: '#68696A',
        marginLeft: 15,
        textAlignVertical: "center",
        fontSize: 16
    },
    register_text: {
        color: '#3383FB',
        marginLeft: 5,
        textAlignVertical: "center",
        fontSize: 16,
        textDecorationLine: "underline"
    }


})



export default Login;
