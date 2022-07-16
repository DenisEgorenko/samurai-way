export type userType = {
    id: string,
    photoUrl: string,
    fullName: string,
    followed: boolean,
    status: string,
    location: { city: string, country: string }
}

export type usersPageType = {
    users: Array<userType>
}



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState: usersPageType = {
    users: []
}

const usersPageReducer = (state: usersPageType = initialState, action: { type: string, userID?: string, users: Array<userType> }): usersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}

        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userID: string) => (
    {type: FOLLOW, userID}
)

export const unfollowAC = (userID: string) => (
    {type: UNFOLLOW, userID}
)

export const setUsersAC = (users: Array<userType>) => (
    {type: SET_USERS, users}
)

export default usersPageReducer