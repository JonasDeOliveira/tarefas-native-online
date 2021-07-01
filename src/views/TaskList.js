import React, { Component } from 'react'
import { View, Text, StyleSheet, 
    ImageBackground, TouchableOpacity, 
    Alert, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'

import { server, showError } from '../common'
import todayImage from '../../assets/imgs/today.jpg'
import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import AddTask from '../views/AddTask'

const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}
export default class TaskList extends Component {

    state = {...initialState}

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('taskState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
        // const savedState = JSON.parse(stateString) || initialSate
        // this.setState({
        //     showDoneTasks: savedState.showDoneTasks
        // }, this.filterTasks)

        this.loadTasks()
    }

    loadTasks = async () => {
        try {
            const resp = await axios.get(`${server}/tasks`)
            this.setState({tasks: resp.data}, this.filterTasks)
        } catch(e) {
            showError(e)
        }

        // try {
        //     const maxDate = moment()
        //     .add({days: this.props.daysAhead})
        //     .format('YYYY-MM-DD 23:59:59')
        //     const resp = await axios.get(`${server}/tasks?date=${maxDate}`)
        //     this.setState({tasks: resp.data}, this.filterTasks)
        // } catch(e) {
        //     showError(e)
        // }
    }

    toggleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt == null
            visibleTasks = this.state.tasks.filter(pending)
        }
        
        this.setState({visibleTasks})
        AsyncStorage.setItem('taskState', JSON.stringify(this.state))
        // AsyncStorage.setItem('taskState', JSON.stringify({
        //     showDoneTasks: this.state.showDoneTasks
        // }))
    }
    



    addTask = async newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados inválidos', 'Descrição não informada!')
            return
        }

        try {
            await axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })
            this.setState({showAddTask: false}, this.loadTasks)
        } catch(e) {
            showError(e)            
        }
        

    }

    toggleTask = async taskId => {
        try {
            await axios.put(`${server}/tasks/${taskId}/toggle`)
            this.loadTasks()
        } catch(e) {
            showError(e)
        }
    }

    deleteTask = async id => {
        try {
            await axios.delete(`${server}/tasks/${id}`)
            this.loadTasks()
        } catch(e) {
            showError(e)
        }
    }

    getImage = () => {
        switch(this.props.daysAhead) {
            case 0: return todayImage
            case 1: return tomorrowImage
            case 7: return weekImage
            default: return monthImage
        }
    }

    getColor= () => {
        switch(this.props.daysAhead) {
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tomorrow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
    }

    render() {

        const TODAY = moment().locale('pt-br').format('ddd, D [de] MMMM')
        //https://momentjs.com/
        //outra opçao da documentacao
        //const TODAY = moment().format('LL');

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({showAddTask: false})} 
                    onSave={this.addTask} color={this.getColor()}/>
                <ImageBackground source={this.getImage()} 
                    style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars'
                                size={30} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks 
                                ? 'eye': 'eye-slash'}
                                size={30} 
                                color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        {/* <Text style={styles.title}>{this.props.title}</Text> */}
                        <Text style={styles.subtitle}>{TODAY}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.containerList}>

                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} onDelete={this.deleteTask} onToggleTask={this.toggleTask}/>}/>

                </View>

                <TouchableOpacity style={[
                    styles.addButton, 
                    {backgroundColor: this.getColor()}
                    ]}
                    onPress={() => this.setState({showAddTask: true})}
                    activeOpacity={0.7}>
                    <Icon name='plus' size={30}
                        color={commonStyles.colors.secondary}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    containerList: {
        flex: 7
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 30,
        marginTop: Constants.statusBarHeight + 10
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    addButton: {
        backgroundColor: commonStyles.colors.today,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 30,
        borderRadius: 40
    }
})