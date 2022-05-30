import styles from './DialogItem.module.css';
import {NavLink, Redirect} from 'react-router-dom';
import React from 'react';

type dialogType = {
    id: number,
    name: string,
    message: string
}

function DialogItem(props: dialogType) {
    return (

        <div>

            <NavLink className={styles.dialog_item} activeClassName={styles.active_dialog} to={`/dialogs/${props.id}`}>

                <img src='/avatar.jpg'/>

                <div className={styles.name}>
                    {props.name}
                </div>

                <div className={styles.last_message}>
                    {props.message}
                </div>

            </NavLink>
        </div>

    )
}

export default DialogItem