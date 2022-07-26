import {followActionType} from "./usersPageReducer";

export type postType = {
    id: number,
    date: string,
    text: string,
    likeCount: number
}

export type profileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string,
    aboutMe: string,
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type profilePageType = {
    profileData: profileDataType,
    postsData: Array<postType>,
    newPostText: string
}

export type addPostActionType = {
    type: 'ADD-POST',
}

export type changeNewPostTextActionType = {
    type: 'CHANGE-NEW-POST-TEXT',
    newPostText: string
}

export type addProfileDataActionType = {
    type: 'ADD-PROFILE-DATA',
    profileData: profileDataType
}

type actionType =
    addPostActionType
    | changeNewPostTextActionType
    | addProfileDataActionType


let initialState: profilePageType = {
    profileData: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        aboutMe: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
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

const profilePageReducer = (state: profilePageType = initialState, action: actionType): profilePageType => {
    switch (action.type) {

        case 'ADD-POST': {
            let newPost: postType = {id: 6, date: '20:50', text: state.newPostText, likeCount: 32}
            return {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        }
        case 'CHANGE-NEW-POST-TEXT': {
            if (action.newPostText) {
                return {...state, newPostText: action.newPostText}
            }
            break
        }
        case "ADD-PROFILE-DATA": {
            return {...state, profileData: action.profileData}
        }
    }
    return state
}

export const addProfileDataActionCreator = (profileData: profileDataType) => (
    {
        type: 'ADD-PROFILE-DATA',
        profileData: profileData
    }
)

export const addPostActionCreator = () => (
    {type: 'ADD-POST'}
)

export const changeNewPostTextActionCreator = (newPostText: string) => (
    {type: 'CHANGE-NEW-POST-TEXT', newPostText: newPostText}
)

export default profilePageReducer