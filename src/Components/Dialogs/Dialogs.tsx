import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {message} from 'antd';
import {dialogType, messageType} from '../../redux/store';


type dialogsPropsType = {
    dialogsData: Array<dialogType>,
    messageData: Array<messageType>
}

function Dialogs(props: dialogsPropsType) {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                message={dialog.lastMessage}/>)
    let messageElements = props.messageData.map(message => <MessageItem id={message.id} name={message.name}
                                                                  message={message.message} time={message.time}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessageElement.current?.value)
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
                <textarea ref={newMessageElement} className={styles.input} wrap="hard" placeholder={'Введите сообщение'}/>
                <button onClick={addMessage} className={styles.button}>Отправить</button>
            </div>
        </div>
    )
}


export default Dialogs