import { AsyncStorage } from 'react-native'
export const checkLogin = () => {

    //temporáriamente
    return {
        type: 'changeStatus',
        payload: {
            status: 2
        }
    }
}

export const signInUser = (email, pass) => {
    return (dispatch) => {
        let endpoint = 'https://alunos.b7web.com.br/apis/devstagram/users/login'
        let jsonData = JSON.stringify({
            email,
            pass
        })

        fetch(endpoint, {
            method: 'POST',
            body: jsonData
        })
            .then((r) => r.json())
            .then((json) => {
                if (json.error == '') {

                    AsyncStorage.setItem('jwt', json.jwt)

                    dispatch({
                        type: 'changeStatus',
                        payload: {
                            status: 1
                        }
                    })
                } else {
                    alert(json.error)
                }
            })
            .catch((error) => {
                alert('Erro de requisição')
            })
    }
}

export const registerNewUser = (name, email, pass) => {
    return (dispatch) => {
        let endpoint = 'https://alunos.b7web.com.br/apis/devstagram/users/new'
        let jsonData = JSON.stringify({
            name,
            email,
            pass
        })

        fetch(endpoint, {
            method: 'POST',
            body: jsonData
        })
            .then((r) => r.json())
            .then((json) => {
                if (json.error == '') {

                    AsyncStorage.setItem('jwt', json.jwt)

                    dispatch({
                        type: 'changeStatus',
                        payload: {
                            status: 1
                        }
                    })
                } else {
                    alert(json.error)
                }
            })
            .catch((error) => {
                alert('Erro de requisição')
            })
    }
}

export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: {
            name: name
        }
    }
}

export const changeEmail = (email) => {
    return {
        type: 'changeEmail',
        payload: {
            email: email
        }
    }
}

export const changePassword = (password) => {
    return {
        type: 'changePassword',
        payload: {
            password: password
        }
    }
}