export type postType = {
    id: number,
    date: string,
    text: string,
    likeCount: number
}

export type profilePageType = {
    postsData: Array<postType>,
    newPostText: string
}

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, date: '20:40', text: 'Hi', likeCount: 12},
        {id: 2, date: '20:40', text: 'My name is', likeCount: 344},
        {id: 3, date: '20:40', text: 'I\'m learning React', likeCount: 22},
        {id: 4, date: '20:40', text: 'Hi', likeCount: 55},
        {id: 5, date: '20:40', text: 'Hi', likeCount: 23},
        {id: 5, date: '20:40', text: 'Hi', likeCount: 23},
    ],
    newPostText: ''
}

const profilePageReducer = (state: profilePageType = initialState, action: { type: string, newPostText?: string, newMessageText?: string }) => {


    switch (action.type) {
        case 'ADD-POST': {
            let newPost: postType = {id: 6, date: '20:50', text: state.newPostText, likeCount: 32}
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        }
        case 'CHANGE-NEW-POST-TEXT':
            if (action.newPostText) {
                return {...state, newPostText: action.newPostText}
            }
    }

    return state
}

export const addPostActionCreator = () => (
    {type: ADD_POST}
)

export const changeNewPostTextActionCreator = (newPostText: string) => (
    {type: CHANGE_NEW_POST_TEXT, newPostText: newPostText}
)

export default profilePageReducer