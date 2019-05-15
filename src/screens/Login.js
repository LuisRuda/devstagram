import React, { Component } from 'react'
import { StyleSheet, ImageBackground, Text, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { checkLogin } from '../actions/AuthActions'

export class Login extends Component {
    static navigationOptions = {
        title: '',
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Devstagram</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='transparent' />
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                    placeholderTextColor='#FFF'
                    secureTextEntry={true}
                    underlineColorAndroid='transparent' />

                <TouchableHighlight onPress={() => {}} style={styles.actionButton} underlayColor='#307EAF'>
                    <Text style={styles.actionButtonText}>Fazer login</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => {}} style={styles.signButton} underlayColor='transparent'>
                    <Text style={styles.signButtonText}>Ainda não possui cadastro? Clique aqui</Text>
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
        status: state.auth.status
    }
}
const LoginConnect = connect(mapStateToProps, { checkLogin })(Login)
export default LoginConnect