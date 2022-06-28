import {postType, profilePageType} from './store';


const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profilePageReducer = (state: profilePageType, action: { type: string, newPostText?: string, newMessageText?:string }) => {


    switch (action.type) {
        case 'ADD-POST':
            let newPost: postType = {id: 6, date: '20:50', text: state.newPostText, likeCount: 32}
            state.postsData.push(newPost)
            state.newPostText = ''
            break;
        case 'CHANGE-NEW-POST-TEXT':
            if (action.newPostText) {
                state.newPostText = action.newPostText
            }
            break;
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