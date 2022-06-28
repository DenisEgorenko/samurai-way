import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {message} from 'antd';
import {
    dialogType,
    messagePageType,
    messageType
} from '../../redux/store';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../redux/messagePageReducer';


type dialogsPropsType = {
    messagePage: messagePageType,
    dispatch: (action: { type: string, newMessageText?: string }) => void
}

function Dialogs(props: dialogsPropsType) {

    let dialogsElements = props.messagePage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                message={dialog.lastMessage}/>)
    let messageElements = props.messagePage.messageData.map(message => <MessageItem id={message.id} name={message.name}
                                                                  message={message.message} time={message.time}/>)


    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialog_items}>
                {dialogsElements}
            </div>


            <div className={styles.messages}>

                {messageElements}

            </div>

            <div className={styles.input_area}>
                <textarea value={props.messagePage.newMessageText}
                          onChange={onMessageChange}
                          className={styles.input}
                          wrap="hard"
                          placeholder={'Введите сообщение'}
                />
                <button onClick={addMessage} className={styles.button}>Отправить</button>
            </div>
        </div>
    )
}


export default Dialogs