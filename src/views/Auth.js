import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import {
//     ImageBackground, Text, StyleSheet, 
//     View, TouchableOpacity,
//     Alert
// } from 'react-native'
// import axios from 'axios'
// import AsyncStorage from "@react-native-async-storage/async-storage"

// import backgroundImage from '../../assets/imgs/login.jpg'
// import commonStyles from '../commonStyles'
// import AuthInput from '../components/AuthInput'
// import { server, showError, showSuccess} from '../common'

const initialState = {

}

// let initialState = {
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     stageNew: false
// }

export default class Auth extends Component {

    state = {...initialState}

    signup = async () => {
        // try {
        //     await axios.post(`${server}/signup`, {
        //         name: this.state.name,
        //         email: this.state.email,
        //         password: this.state.password,
        //         confirmPassword: this.state.confirmPassword
        //     })
        //     showSuccess('Usuário cadastrado!')
        //     this.setState({...initialState})
        // } catch(e) {
        //     showError(e)
        // }
    }

    signin = async () => {
        // try {
        //     const resp = await axios.post(`${server}/signin`, { 
        //         email: this.state.email,
        //         password: this.state.password,
        //     })
        //     AsyncStorage.setItem('userData', JSON.stringify(resp.data))
        //     axios.defaults.headers.common['Authorization'] = `bearer ${resp.data.token}`
        //     this.props.navigation.navigate('Home', resp.data)
        // } catch(e) {
        //     showError(e)
        // }
    }

    signinOrSignup() {
        // if (this.state.stageNew) {
        //     this.signup()
        // } else {
        //     this.signin()
        // }
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    // background: {
    //     flex: 1,
    //     width: '100%',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // title: {
    //     color: commonStyles.colors.secondary,
    //     fontSize: 70,
    //     marginBottom: 10
    // },
    // subTitle: {
    //     color: commonStyles.colors.secondary,
    //     fontSize: 20,
    //     textAlign: 'center',
    //     marginBottom: 10
    // },
    // formContainer: {
    //     backgroundColor: 'rgba(0,0,0,0.5)',
    //     padding: 20,
    //     width: '90%'
    // },
    // input: {
    //     backgroundColor: '#fff',
    //     marginTop: 10,
    //     padding: 10
    // },
    // button: {
    //     backgroundColor: '#080',
    //     marginTop: 10,
    //     padding: 10,
    //     alignItems: 'center',
    //     borderRadius: 12
    // },
    // buttonText: {
    //     color: '#fff',
    //     fontSize: 20
    // }
})