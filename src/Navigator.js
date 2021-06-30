// import React from 'react'
// //npm install react-navigation
// import { createAppContainer, createSwitchNavigator } from 'react-navigation' 
// //npm install react-navigation-drawer
// import { createDrawerNavigator } from 'react-navigation-drawer'

// import Auth from './views/Auth'
// import TaskList from './views/TaskList'
// import Menu from './views/Menu'

// const menuConfig = {
//     initialRouteName: 'Today',
//     contentComponent: Menu,
//     contentOptions: {
//         labelStyles: { 
//             fontWeight: 'normal',
//             fontSize: 20
//         },
//         activeLabelStyle: {
//             color: '#080',
//             fontWeight: 'bold'
//         }
//     }
// }

// const menuToutes = {
//     Today: {
//         name: 'Today',
//         screen: props => <TaskList title="Hoje" daysAhead={0} {...props} />,
//         navigatorOptions: {
//             title: 'Hoje'
//         }
//     },
//     Tomorrow: {
//         name: 'Tomorrow',
//         screen: props => <TaskList title="Amanhã" daysAhead={1} {...props} />,
//         navigatorOptions: {
//             title: 'Amanhã'
//         }
//     },
//     Week: {
//         name: 'Week',
//         screen: props => <TaskList title="Semana" daysAhead={7} {...props} />,
//         navigatorOptions: {
//             title: ' '
//         }
//     },
//     Month: {
//         name: 'Month',
//         screen: props => <TaskList title="Mês" daysAhead={30} {...props} />,
//         navigatorOptions: {
//             title: 'Mês'
//         }
//     }
// }

// const menuNavigator = createDrawerNavigator(menuToutes, menuConfig)

// const MAINROUTES = {
//     Auth: {
//         name: 'Auth',
//         screen: Auth
//     },
//     Home: {
//         name: 'Home',
//         screen: menuNavigator
//     }
// }

// const MainNavigator = createSwitchNavigator(MAINROUTES, {
//     initialRouteName: 'Auth'
// })

// export default createAppContainer(MainNavigator)