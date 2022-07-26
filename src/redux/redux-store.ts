import {combineReducers, createStore} from 'redux';
import profilePageReducer from './profilePageReducer';
import messagePageReducer from './messagePageReducer';
import usersPageReducer from "./usersPageReducer";


let reducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    usersPage: usersPageReducer
})

export let store = createStore(reducer)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

