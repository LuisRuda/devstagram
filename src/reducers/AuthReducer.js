const initialState = {
    email: '',
    password: '',
    status: 0
}

const AuthReducer = (state = initialState, action) => {

    // alteração do state
    if (action.type === 'changeEmail') {
        return { ...state, email: action.payload.email}
    }
    
    if (action.type === 'changeStatus') {
        return { ...state, status: action.payload.status}
    }

    return state;
}

export default AuthReducer