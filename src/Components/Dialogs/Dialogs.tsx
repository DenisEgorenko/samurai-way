import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Dialogs(){
    return(
        <div className={styles.dialogs}>

            <div className={styles.dialog_items}>
                <DialogItem id={1} name={"Dima"} message={"Last Message"}/>
                <DialogItem id={2} name={"Yana"} message={"Last Message"}/>
                <DialogItem id={3} name={"Vanya"} message={"Last Message"}/>
                <DialogItem id={4} name={"Petya"} message={"Last Message"}/>
                <DialogItem id={5} name={"Dima"} message={"Last Message"}/>
                <DialogItem id={6} name={"Yana"} message={"Last Message"}/>
                <DialogItem id={7} name={"Vanya"} message={"Last Message"}/>
                <DialogItem id={8} name={"Petya"} message={"Last Message"}/>
                <DialogItem id={9} name={"Dima"} message={"Last Message"}/>

            </div>


            <div className={styles.messages}>

                <MessageItem name={"Denis"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"How"} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"Are"} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"You"} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"Hi"} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"Hi"} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"How"} time={"20:40"}/>
                <MessageItem name={"Denis"} message={"Are"} time={"20:40"}/>


            </div>

            <div className={styles.input_area}>
                <textarea className={styles.input} wrap="hard" placeholder={"Введите сообщение"}/>
                <button className={styles.button}>Отправить</button>
            </div>
        </div>
    )
}


export default Dialogs