import React, { Component } from 'react'
import { StyleSheet, ImageBackground, Text, TextInput, TouchableHighlight } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import { connect } from 'react-redux'

import { checkLogin, registerNewUser, changeName, changeEmail, changePassword } from '../actions/AuthActions'

export class SignUp extends Component {
    static navigationOptions = {
        title: '',
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {}

        this.signInAction = this.signInAction.bind(this)
        this.registerAction = this.registerAction.bind(this)
        this.verifyStatus = this.verifyStatus.bind(this)
    }

    componentDidUpdate() {
        this.verifyStatus()
    }

    verifyStatus() {
        if (this.props.status === 1) {
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            }))
        }
    }

    signInAction() {
        this.props.navigation.goBack()
    }

    registerAction() {
        this.props.registerNewUser(
            this.props.name,
            this.props.email,
            this.props.password
        )
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Devstagram</Text>

                <TextInput
                    value={this.props.name}
                    onChangeText={this.props.changeName}
                    style={styles.input}
                    placeholder='Digite seu nome'
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='transparent' />
                <TextInput
                    value={this.props.email}
                    onChangeText={this.props.changeEmail}
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='transparent' />
                <TextInput
                    value={this.props.password}
                    onChangeText={this.props.changePassword}
                    style={styles.input}
                    placeholder='Digite sua senha'
                    placeholderTextColor='#FFF'
                    secureTextEntry={true}
                    underlineColorAndroid='transparent' />  

                <TouchableHighlight onPress={this.registerAction} style={styles.actionButton} underlayColor='#307EAF'>
                    <Text style={styles.actionButtonText}>Fazer cadastro</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.signInAction} style={styles.signButton} underlayColor='transparent'>
                    <Text style={styles.signButtonText}>Já tem cadastro? Clique aqui</Text>
                </TouchableHighlight>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    logo: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 30
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 5,
        color: '#FFF',
        fontSize: 17,
        marginBottom: 10
    },
    actionButton: {
        width: '90%',
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#FFF',
        fontSize: 16
    },
    signButton: {
        width: '90%',
        height: 50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    signButtonText: {
        color: '#FFF',
        fontSize: 14
    }
})

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password
    }
}
const SignUpConnect = connect(mapStateToProps, { checkLogin, registerNewUser, changeName, changeEmail, changePassword })(SignUp)
export default SignUpConnect