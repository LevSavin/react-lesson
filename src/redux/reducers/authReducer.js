import { registerError, registerStart, registerSuccess, loginError, loginStart, loginSuccess, logautError, logautStart, logautSuccess } from "../actions"
import {auth} from "../../service/firebase"

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_REGISTER':
        case 'LOADING_LOGIN':
        case 'LOADING_LOGOUT':
            return {
                ...state,
                loading: true,
            }
        case 'ERROR_REGISTER':
        case 'ERROR_LOGIN':
        case 'ERROR_LOGOUT':
            return {
                ...state,
                error: action.payload,
            }
        case 'SUCCESS_REGISTER':
        case 'SUCCESS_LOGIN':
            return {
                ...state,
                currentUser: action.payload,
            }
        case 'SUCCESS_LOGOUT':
            return {
                ...state,
                currentUser:  null,
            }
        default:
            return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart)
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerError(error.toStraing())))
    }
}

export const loginInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(loginStart)
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginError(error.toStraing())))
    }
}

export const logautInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(logautStart)
        auth
            .signOut
            .then(() => {
                dispatch(logautSuccess())
            })
            .catch((error) => dispatch(logautError(error.toStraing())))
    }
}