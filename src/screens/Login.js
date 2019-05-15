import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
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
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        status: state.auth.status
    }
}
const LoginConnect = connect(mapStateToProps, { checkLogin })(Login)
export default LoginConnect