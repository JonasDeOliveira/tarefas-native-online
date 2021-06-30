import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import {
//     View,
//     ActivityIndicator,
//     StyleSheet
// } from 'react-native'
// import axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'
const initialState = {

}
export default class AuthOrApp extends Component {

    state = {...initialState}

    componentDidMount = async () => {
    //     const userDataJson = await AsyncStorage.getItem('userData')
    //     let userData = null
        
    //     try {
    //         userData = JSON.parse(userDataJson)
    //     } catch(e) {
    //         // userData está inválido
    //     }

    //     if(userData && userData.token) {
    //         axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
    //         this.props.navigation.navigate('Home', userData)
    //     } else {
    //         this.props.navigation.navigate('Auth')
    //     }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <ActivityIndicator size='large' /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#000'
    }
})