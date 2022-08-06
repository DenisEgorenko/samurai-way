import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePageReducer';
import {messagePageReducer} from './messagePageReducer';
import {usersPageReducer} from "./usersPageReducer";
import {authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk'


let reducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store.getState()

