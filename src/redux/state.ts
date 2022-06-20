
let rerenderEntireTree = (ff: any) => {

}


export type postType = {
    id: number,
    date: string,
    text: string,
    likeCount: number
}

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

export type profilePageType = {
    postsData: Array<postType>,
    newPostText: string
}

type messagePageType = {
    dialogsData: Array<dialogType>,
    messageData: Array<messageType>
}

export type stateType = {
    profilePage: profilePageType,
    messagePage: messagePageType
    sideBar: any
}

let state: stateType = {
    profilePage: {
        postsData: [
            {id: 1, date: '20:40', text: 'Hi', likeCount: 12},
            {id: 2, date: '20:40', text: 'My name is', likeCount: 344},
            {id: 3, date: '20:40', text: 'I\'m learning React', likeCount: 22},
            {id: 4, date: '20:40', text: 'Hi', likeCount: 55},
            {id: 5, date: '20:40', text: 'Hi', likeCount: 23},
            {id: 5, date: '20:40', text: 'Hi', likeCount: 23},
        ],
        newPostText: ''
    },
    messagePage: {
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
    },
    sideBar: []
}

export let addPost = (postMessage: string) => {

    let newPost: postType = {id: 6, date: '20:50', text: postMessage, likeCount: 32}

    state.profilePage.postsData.push(newPost)

    state.profilePage.newPostText = ''

    rerenderEntireTree(state)
}


export let changeNewPostText = (newPostMessage: string) => {

    state.profilePage.newPostText = newPostMessage

    rerenderEntireTree(state)
}

export const subscribe = (observer: (state:stateType)=>void) => {
    rerenderEntireTree = observer
}

export default state