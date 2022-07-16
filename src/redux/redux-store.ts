import {combineReducers, createStore} from 'redux';
import profilePageReducer from './profilePageReducer';
import messagePageReducer from './messagePageReducer';
import usersPageReducer from "./usersPageReducer";


export type appStateType = ReturnType<typeof reducer>;

let reducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    usersPage: usersPageReducer
})


export let store = createStore(reducer)

