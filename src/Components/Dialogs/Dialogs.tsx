import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {messagePageType} from '../../redux/messagePageReducer';


type dialogsPropsType = {
    messagePage: messagePageType,
    addMessage: () => void,
    onMessageChange: (text: string) => void

}

function Dialogs(props: dialogsPropsType) {

    let dialogsElements = props.messagePage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                                  message={dialog.lastMessage}/>)
    let messageElements = props.messagePage.messageData.map(message => <MessageItem id={message.id} name={message.name}
                                                                                    message={message.message}
                                                                                    time={message.time}/>)


    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
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