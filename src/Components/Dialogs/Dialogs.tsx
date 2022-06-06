import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {message} from 'antd';
import {dialogType, messageType} from '../../redux/state';


type dialogsPropsType = {
    dialogsData: Array<dialogType>,
    messageData: Array<messageType>
}

function Dialogs(props: dialogsPropsType) {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                message={dialog.lastMessage}/>)
    let messageElements = props.messageData.map(message => <MessageItem id={message.id} name={message.name}
                                                                  message={message.message} time={message.time}/>)

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialog_items}>
                {dialogsElements}
            </div>


            <div className={styles.messages}>

                {messageElements}

            </div>

            <div className={styles.input_area}>
                <textarea className={styles.input} wrap="hard" placeholder={'Введите сообщение'}/>
                <button className={styles.button}>Отправить</button>
            </div>
        </div>
    )
}


export default Dialogs