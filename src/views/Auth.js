import React, { Component } from 'react'
import {
    ImageBackground, Text, StyleSheet, 
    View, TouchableOpacity, Alert
} from 'react-native'
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'
import { server, showError, showSuccess} from '../common'

let initialState = {
    name: '',
    email: 'jonas@rd.com',
    password: '123456',
    confirmPassword: '',
    stageNew: false
}

export default class Auth extends Component {

    state = {...initialState}

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })
            showSuccess('Usuário cadastrado!')
            this.setState({...initialState})
        } catch(e) {
            showError(e)
        }
    }

    signin = async () => {
        try {
            const resp = await axios.post(`${server}/signin`, { 
                email: this.state.email,
                password: this.state.password,
            })

            AsyncStorage.setItem('userData', JSON.stringify(resp.data))
            axios.defaults.headers.common['Authorization'] = `bearer ${resp.data.token}`
            this.props.navigation.navigate('Home', resp.data)
        } catch(e) {
            showError(e)
        }
    }

    // mostrarUser() {
    //     if (this.state.stageNew) {
    //         return (
    //             <AuthInput icon='user' placeholder='Nome' style={styles.input}
    //                     value={this.state.name} onChangeText={name => this.setState({name})}/>
    //         )
    //     }
    // }

    // mostrarConfirmarSenha() {
    //     if (this.state.stageNew) {
    //         return (
    //             <AuthInput icon='lock' placeholder='Confirmar Senha' style={styles.input}
    //                 value={this.state.confirmPassword} secureTextEntry={true} 
    //                 onChangeText={confirmPassword => this.setState({confirmPassword})}/>
    //         )
    //     }
    // }

    signinOrSignup() {
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    render() {
        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >=6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3)
            validations.push(this.state.password == this.state.confirmPassword)
        }

        const validForm = validations.reduce((total, atual) => {
            return total && atual
        })

        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>
                        {this.state.stageNew ? 'Crie a sua Conta' : 'Faça seu login'}
                    </Text>
                    {/* {this.mostrarUser()}  faz a mesma coisa da renderização abaixo*/}
                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Nome' style={styles.input}
                            value={this.state.name} onChangeText={name => this.setState({name})}/>
                    }
                    <AuthInput icon='at' placeholder='E-mail' style={styles.input}
                        value={this.state.email} onChangeText={email => this.setState({email})}/>
                    <AuthInput icon='lock' placeholder='Senha' style={styles.input}
                        value={this.state.password} secureTextEntry={true} 
                        onChangeText={password => this.setState({password})}/>
                    {/* {this.mostrarConfirmarSenha()} faz a mesma coisa da renderização abaixo*/}
                    {this.state.stageNew &&
                        <AuthInput icon='lock' placeholder='Confirmar Senha' style={styles.input}
                            value={this.state.confirmPassword} secureTextEntry={true} 
                            onChangeText={confirmPassword => this.setState({confirmPassword})}/>
                    }
                    <TouchableOpacity onPress={() => this.signinOrSignup()}
                        disabled={validForm == false}>
                        <View style={[styles.button, validForm ? {} : {backgroundColor: '#aaa'}]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{padding: 10}}
                    onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew 
                        ? 'Já possue conta?' : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subTitle: {
        color: commonStyles.colors.secondary,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        width: '90%'
    },
    input: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 12
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    }
})