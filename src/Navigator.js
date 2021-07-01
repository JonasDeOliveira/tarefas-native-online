import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
import { createDrawerNavigator } from 'react-navigation-drawer'

import Auth from './views/Auth'
import TaskList from './views/TaskList'
import Menu from './components/Menu'

const menuConfig = {
    initialRouteName: 'Hoje',
    contentComponent: Menu,
    contentOptions: {
        labelStyles: { 
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
            fontWeight: 'bold'
        }
    }
}

const menuRoutes = {
    Hoje: {
        name: 'Hoje',
        screen: props => <TaskList title="Hoje" daysAhead={0} {...props} />,
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskList title="Amanhã" daysAhead={1} {...props} />,
        navigatorOptions: {
            title: 'Amanhã'
        }
    },
    Week: {
        name: 'Week',
        screen: props => <TaskList title="Semana" daysAhead={7} {...props} />,
        navigatorOptions: {
            title: ' '
        }
    },
    Month: {
        name: 'Month',
        screen: props => <TaskList title="Mês" daysAhead={30} {...props} />,
        navigatorOptions: {
            title: 'Mês'
        }
    }
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const MAINROUTES = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: menuNavigator
    },
}

const MainNavigator = createSwitchNavigator(MAINROUTES, {
    initialRouteName: 'Auth'
})

export default createAppContainer(MainNavigator)