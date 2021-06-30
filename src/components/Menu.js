import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import axios from 'axios'
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const logout = () => {
        // delete axios.defaults.headers.common['Authorization']
        // AsyncStorage.removeItem('userData')
        // props.navigation.navigate('AuthOrApp')
    }

    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
    // header: {
    //     borderBottomWidth: 1,
    //     borderColor: '#DDD'
    // },
    // title: {
    //     color: '#000',
    //     fontSize: 30,
    //     paddingTop: 70,
    //     padding: 10
    // },
    // avatar: {
    //     width: 60,
    //     height: 60,
    //     borderWidth: 2,
    //     borderRadius: 30,
    //     margin: 10,
    //     borderColor: '#222',
    //     justifyContent: 'center',
    //     alignItems:'center'
    // },
    // userInfo: {
    //     marginLeft: 10,
    // },
    // name: {
    //     fontSize: 20,
    //     color: commonStyles.colors.mainText,
    //     marginBottom: 5,
    // },
    // email: {
    //     fontSize: 15,
    //     color: commonStyles.colors.subText,
    //     marginBottom: 10,
    // },
    // logoutIcon: {
    //     marginLeft: 10,
    //     marginBottom: 10
    // }
})