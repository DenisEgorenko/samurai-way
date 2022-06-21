import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import store, {stateType, storeType} from './redux/store';


let rerenderEntireTree = (state: stateType) => {

    ReactDOM.render(
        <App
            addPost={store.addPost.bind(store)}
            changeNewPostText={store.changeNewPostText.bind(store)}
            state={state}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)