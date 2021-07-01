import React from 'react'
import { View, Text, StyleSheet, 
    TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import commonStyles from '../commonStyles'

export default props => {

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')
    const doneOrNotStyle = props.doneAt != null ? {textDecorationLine: 'line-through'} : {}

    function getCheckView(doneAt) {
        if (doneAt != null) {
            return (
                    <View style={styles.done}>
                        <Icon name='check' size={20} color='#fff'/>
                    </View>
            )
        }

        return (
            <View style={styles.pending}>
                
            </View>
        )
    }

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right} 
                onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name="trash" size={30} color='#fff'/>
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <TouchableOpacity style={styles.left}>
                <Icon name="trash" size={30} color='#fff' style={styles.excludeIcon}/>
                <Text style={styles.excludeText}>
                    Excluir
                </Text>
            </TouchableOpacity>
        )
    }
    
    return (
        <Swipeable 
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            leftThreshold={150}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#aaa',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontSize: 16,
        color: commonStyles.colors.mainText
    },
    date: {
        color: commonStyles.colors.subText,
        fontSize: 12
    },
    right: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    left: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    excludeIcon: {
        marginLeft: 10
    },
    excludeText: {
        color: commonStyles.colors.secondary,
        fontSize: 20,
        margin: 10
    }
})