import profilePageReducer, {
    addPostActionCreator,
    addProfileDataActionCreator,
    changeNewPostTextActionCreator, profileInitialState
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

    const resultState = profilePageReducer(profileInitialState, addPostActionCreator())

    expect(resultState.postsData.length).toBe(7)
})

test('New post text should be added', () => {

    const newPostText = 'Text'

    const resultState = profilePageReducer(profileInitialState, changeNewPostTextActionCreator(newPostText))

    expect(resultState.newPostText).toBe('Text')
})