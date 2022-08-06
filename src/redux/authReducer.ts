import {AppDispatch} from './redux-store';
import {authAPI} from '../api/api';

export type authDataType = {
    id: number | null,
    login: string,
    email: string,
}

export type authType = {
    authData: authDataType,
    isAuth: boolean
}

export type setAuthDataActionType = {
    type: 'SET-AUTH-DATA',
    authData: authDataType
}

type actionType = setAuthDataActionType


let initialState: authType = {
    authData: {
        id: null,
        login: '',
        email: '',
    },
    isAuth: false
}

export const authReducer = (state: authType = initialState, action: actionType): authType => {
    switch (action.type) {
        case 'SET-AUTH-DATA': {
            return {...state, authData: action.authData, isAuth: true}
        }
    }
    return state
}


export const setAuthDataAC = (authData: authDataType): setAuthDataActionType => (
    {
        type: 'SET-AUTH-DATA',
        authData: authData
    }
)

export const authThunk = () => (dispatch: AppDispatch) => {
    authAPI.getAuth().then(res => {
        if (res.resultCode === 0) {
            dispatch(setAuthDataAC(res.data))
        }
    })
}