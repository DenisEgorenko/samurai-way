import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {message} from 'antd';
import {
    dialogType,
    messagePageType,
    messageType, profilePageType
} from '../../redux/store';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../redux/messagePageReducer';
import Dialogs from './Dialogs';
import {EmptyObject, Store} from 'redux';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../redux/profilePageReducer';
import MyPosts from '../Profile/MyPosts/MyPosts';
import {MyContext} from '../../index';


type dialogsPropsType = {}

function DialogsContainer(props: dialogsPropsType) {


    return (
        <MyContext.Consumer>
            {
                (store) => {
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    const onMessageChange = (text: string) => {
                        store.dispatch(changeNewMessageTextActionCreator(text))
                    }

                    return <Dialogs messagePage={store.getState().messagePage} addMessage={addMessage}
                                    onMessageChange={onMessageChange}/>
                }
            }
        </MyContext.Consumer>

    )
}


export default DialogsContainer