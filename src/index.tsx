import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import state, {changeNewPostText, stateType, subscribe} from './redux/state';
import {addPost} from './redux/state';


let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App addPost={addPost}
             appState={state}
             changeNewPostText={changeNewPostText}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)