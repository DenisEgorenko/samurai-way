import {AppDispatch, RootState} from './redux-store';
import {authAPI} from '../api/api';
import {Redirect} from 'react-router-dom';
import React from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

export type authDataType = {
    id: number | null,
    login: string,
    email: string,
}

export type authType = {
    authData: authDataType,
    isAuth: boolean,
    initialized: boolean
}

export type setAuthDataActionType = {
    type: 'SET-AUTH-DATA',
    authData: authDataType
}

export type setAuthFetchingActionType = {
    type: 'SET-AUTH-FETCHING',
}

type actionType = setAuthDataActionType | setAuthFetchingActionType


let initialState: authType = {
    authData: {
        id: null,
        login: '',
        email: '',
    },
    isAuth: false,
    initialized: false
}

export const authReducer = (state: authType = initialState, action: actionType): authType => {
    switch (action.type) {
        case 'SET-AUTH-DATA': {
            return {...state, authData: action.authData, isAuth: true}
        }

        case 'SET-AUTH-FETCHING': {
            return {...state, initialized: !state.initialized}
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

export const setAuthFetchingAC = (): setAuthFetchingActionType => (
    {
        type: 'SET-AUTH-FETCHING',
    }
)


export const authThunk = () => (dispatch: AppDispatch) => {
    return authAPI.getAuth().then(res => {
        if (res.resultCode === 0) {
            dispatch(setAuthDataAC(res.data))
            dispatch(setAuthFetchingAC())

        } else {
            dispatch(setAuthFetchingAC())
        }
    })
}

export const loginThunk = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<RootState, undefined, any>) => {

    try {
        const res = await authAPI.login(
            email,
            password,
            rememberMe
        )

        dispatch(setAuthFetchingAC())
        if (res.resultCode === 0) {
            dispatch(authThunk())
        } else {
            dispatch(stopSubmit('LoginForm', {_error: 'Error'}))
        }
    } catch (e) {
        console.log(e)
    }
}