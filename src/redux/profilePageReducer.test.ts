import {
    addPostActionCreator, profilePageReducer,
    addProfileDataActionCreator, profileInitialState
} from './profilePageReducer';

test('Profile data should be added', () => {

    const profileData = {
        userId: 2,
        lookingForAJob: true,
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
    }

    const resultState = profilePageReducer(profileInitialState, addProfileDataActionCreator(profileData))

    expect(resultState.profileData.userId).toBe(2)
    expect(resultState.profileData.lookingForAJob).toBe(true)
})

test('Post data should be added', () => {

    const resultState = profilePageReducer(profileInitialState, addPostActionCreator("text"))

    expect(resultState.postsData.length).toBe(7)
})
