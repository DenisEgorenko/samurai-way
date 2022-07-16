export type dialogType = {
    id: number,
    name: string,
    lastMessage: string
}

export type messageType = {
    id: number,
    name: string,
    message: string,
    time: string
}

export type messagePageType = {
    dialogsData: Array<dialogType>,
    messageData: Array<messageType>,
    newMessageText: string
}


const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Denis', lastMessage: 'Last Message'},
        {id: 2, name: 'Dima', lastMessage: 'Last Message'},
        {id: 3, name: 'Yana', lastMessage: 'Last Message'},
        {id: 4, name: 'Vanya', lastMessage: 'Last Message'},
        {id: 5, name: 'Petya', lastMessage: 'Last Message'},
        {id: 6, name: 'Denis', lastMessage: 'Last Message'},
        {id: 7, name: 'Dima', lastMessage: 'Last Message'},
        {id: 8, name: 'Yana', lastMessage: 'Last Message'},
        {id: 9, name: 'Vanya', lastMessage: 'Last Message'},
        {id: 10, name: 'Petya', lastMessage: 'Last Message'}
    ],
    newMessageText: '',
    messageData: [
        {id: 1, name: 'Denis', message: 'Hi', time: '20:40'},
        {
            id: 2,
            name: 'Denis',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            time: '20:40'
        },
        {id: 3, name: 'Denis', message: 'How', time: '20:40'},
        {id: 4, name: 'Denis', message: 'Are', time: '20:40'},
        {id: 5, name: 'Denis', message: 'You', time: '20:40'},
        {id: 6, name: 'Denis', message: 'Hi', time: '20:40'},
        {
            id: 7,
            name: 'Denis',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            time: '20:40'
        }
    ]
}

const messagePageReducer = (state: messagePageType = initialState, action: { type: string, newMessageText?: string }) => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage: messageType = {
                id: 1,
                name: 'Denis',
                message: state.newMessageText,
                time: '20:40'
            }
            return {...state, messageData: [...state.messageData, newMessage], newMessageText: ''}
        }
        case 'CHANGE-NEW-MESSAGE-TEXT':
            if (action.newMessageText) {
                return {...state, newMessageText: action.newMessageText}
            }
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