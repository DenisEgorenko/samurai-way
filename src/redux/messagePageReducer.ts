import {messagePageType, messageType} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const messagePageReducer = (state: messagePageType, action: { type: string, newPostText?: string, newMessageText?:string }) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: messageType = {
                id: 1,
                name: 'Denis',
                message: state.newMessageText,
                time: '20:40'
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            break;
        case 'CHANGE-NEW-MESSAGE-TEXT':
            if (action.newMessageText) {
                state.newMessageText = action.newMessageText
            }
            break;
    }

    return state
}

export const addMessageActionCreator = () => (
    {type: ADD_MESSAGE}
)

export const changeNewMessageTextActionCreator = (newMessageText: string) => (
    {type: CHANGE_NEW_MESSAGE_TEXT, newMessageText: newMessageText}
)

export default messagePageReducer