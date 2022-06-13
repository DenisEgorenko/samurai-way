import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, stateType} from './redux/state';
import React from 'react';


export let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App addPost={addPost} appState={state}/>,
        document.getElementById('root')
    );
}