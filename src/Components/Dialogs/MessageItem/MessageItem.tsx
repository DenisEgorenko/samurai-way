import styles from './MessageItem.module.css';
import React from 'react';


type messageType = {
    name: string,
    message: string,
    time: string
}


function MessageItem(props: messageType) {
    return (
        <div className={styles.message_item}>

            <img src="/avatar.jpg"/>

            <div className={styles.name}>
                {props.name}
            </div>

            <div className={styles.message}>
                {props.message}
            </div>

            <div className={styles.time}>
                {props.time}
            </div>


        </div>
    )
}

export default MessageItem