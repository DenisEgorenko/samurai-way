import {setIsFetchingAC} from './usersPageReducer';
import {AppDispatch} from './redux-store';
import {profileAPI} from '../api/api';

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
    profileStatus: string,
    postsData: Array<postType>,
}

export type addPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}

export type addProfileDataActionType = {
    type: 'ADD-PROFILE-DATA',
    profileData: profileDataType
}

export type addProfileStatusActionType = {
    type: 'ADD-PROFILE-STATUS',
    profileStatus: string
}

export type updateProfileStatusActionType = {
    type: 'UPDATE-PROFILE-STATUS',
    newProfileStatus: string
}

type actionType =
    addPostActionType
    | addProfileDataActionType
    | addProfileStatusActionType
    | updateProfileStatusActionType


export let profileInitialState: profilePageType = {
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
    profileStatus: '',
    postsData: [
        {id: 1, date: '20:40', text: 'Hi', likeCount: 12},
        {id: 2, date: '20:40', text: 'My name is', likeCount: 344},
        {id: 3, date: '20:40', text: 'I\'m learning React', likeCount: 22},
        {id: 4, date: '20:40', text: 'Hi', likeCount: 55},
        {id: 5, date: '20:40', text: 'Hi', likeCount: 23},
        {id: 5, date: '20:40', text: 'Hi', likeCount: 23},
    ],
}

export const profilePageReducer = (state: profilePageType = profileInitialState, action: actionType): profilePageType => {
    switch (action.type) {

        case 'ADD-POST': {
            let newPost: postType = {id: 6, date: '20:50', text: action.newPostText, likeCount: 32}
            return {...state, postsData: [newPost, ...state.postsData]}
        }
        case 'ADD-PROFILE-DATA': {
            return {...state, profileData: action.profileData}
        }

        case 'ADD-PROFILE-STATUS': {
            return {...state, profileStatus: action.profileStatus}
        }

        case 'UPDATE-PROFILE-STATUS': {
            return {...state, profileStatus: action.newProfileStatus}
        }
    }
    return state
}


export const addProfileDataActionCreator = (profileData: profileDataType): addProfileDataActionType => (
    {
        type: 'ADD-PROFILE-DATA',
        profileData: profileData
    }
)

export const addPostActionCreator = (newPostText: string): addPostActionType => (
    {type: 'ADD-POST', newPostText: newPostText}
)


export const addProfileStatusActionCreator = (status: string): addProfileStatusActionType => (
    {type: 'ADD-PROFILE-STATUS', profileStatus: status}
)

export const updateProfileStatusActionCreator = (status: string): updateProfileStatusActionType => (
    {type: 'UPDATE-PROFILE-STATUS', newProfileStatus: status}
)


export const profileThunk = (id: number) => (dispatch: AppDispatch) => {
    dispatch(setIsFetchingAC(true))

    const prReq = profileAPI.getProfileData(id).then(res => {
        dispatch(addProfileDataActionCreator(res.data))
    })
    const prStReq = profileAPI.getStatus(id).then(res => {
        dispatch(addProfileStatusActionCreator(res.data))
    })

    Promise.all([prReq, prStReq]).then(req => {
        dispatch(setIsFetchingAC(false))
    })
}

export const SetProfileStatusThunk = (status: string) => (dispatch: AppDispatch) => {

    profileAPI.setStatus(status).then(res => {
        if(res.data.resultCode === 0){
            dispatch(addProfileStatusActionCreator(status))
        }
    })

}