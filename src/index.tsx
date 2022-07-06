import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import {store} from './redux/redux-store'
import {messagePageType, profilePageType, stateType} from './redux/store';
import {EmptyObject, Store} from 'redux';


type ProviderPropsType = {
    store: Store<EmptyObject & { profilePage: profilePageType; messagePage: messagePageType; }>
    children: React.ReactNode
}

export const MyContext = React.createContext(store)
const Provider = (props: ProviderPropsType) => {
    return <MyContext.Provider value={props.store}>
        {props.children}
    </MyContext.Provider>
}

const rerenderEntireTree = (state: EmptyObject & stateType) => {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))