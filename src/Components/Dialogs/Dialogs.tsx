import React, {PropsWithChildren} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {messagePageType} from '../../redux/messagePageReducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../utills/FormsControls';
import {required} from '../../utills/validators';


type dialogsPropsType = {
    messagePage: messagePageType,
    addMessage: (newMessageText: string) => void,
}

type formData = {
    newMessageText: string
}

function Dialogs(props: dialogsPropsType) {

    let dialogsElements = props.messagePage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                                  message={dialog.lastMessage}/>)
    let messageElements = props.messagePage.messageData.map(message => <MessageItem id={message.id} name={message.name}
                                                                                    message={message.message}
                                                                                    time={message.time}/>)


    const addMessage = (values: formData) => {
        console.log(values)
        props.addMessage(values.newMessageText)
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
                <AddNewMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}

const AddNewMessageForm = reduxForm<formData>({form: 'AddNewMessageForm'})(
    (props: PropsWithChildren<InjectedFormProps<formData>>) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageText'} placeholder={'Введите текст сообщения'} component={Textarea} validate={[required]}/>
            </div>
            <div>
                <button className={styles.button}>Отправить</button>
            </div>
        </form>;
    })

export default Dialogs