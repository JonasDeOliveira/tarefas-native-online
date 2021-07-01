import React from 'react'
import { ScrollView, View, Text, 
    StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"
import Icon from 'react-native-vector-icons/FontAwesome'

import commonStyles from '../commonStyles'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('Auth')
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.avatar}>
                    <Icon name='user' size={40} color='#000'/>
                </View>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.name}>
                    Olá, {props.navigation.getParam('name')}!
                </Text>
                <Text style={styles.email}>
                    {props.navigation.getParam('email')}
                </Text>
            </View>
            <TouchableOpacity onPress={logout}>
                <View style={styles.logoutIcon}>
                    <Icon name='sign-out' size={30} color='#800'/>
                </View>
            </TouchableOpacity>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        color: '#000',
        fontSize: 30,
        paddingTop: 70,
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 30,
        margin: 10,
        borderColor: '#222',
        justifyContent: 'center',
        alignItems:'center'
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontSize: 20,
        color: commonStyles.colors.mainText,
        marginBottom: 5,
    },
    email: {
        fontSize: 15,
        color: commonStyles.colors.subText,
        marginBottom: 10,
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10
    }
})