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
}


const ADD_MESSAGE = 'ADD-MESSAGE';

export const messageInitialState: messagePageType = {
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

export const messagePageReducer = (state: messagePageType = messageInitialState, action: { type: string, newMessageText: string }) => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage: messageType = {
                id: 1,
                name: 'Denis',
                message: action.newMessageText,
                time: '20:40'
            }
            return {...state, messageData: [...state.messageData, newMessage]}
        }
    }
    return state
}

export const addMessageAC = (newMessageText: string) => (
    {type: ADD_MESSAGE, newMessageText: newMessageText}
)
