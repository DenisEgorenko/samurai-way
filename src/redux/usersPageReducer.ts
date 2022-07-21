export type userType = {
    id: number,
    photos: {small: string, large: string}
    name: string,
    followed: boolean,
    status: string,
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

const usersPageReducer = (state: usersPageType = initialState, action: { type: string, userID?: number, users: Array<userType> }): usersPageType => {

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

export const followAC = (userID: number) => (
    {type: FOLLOW, userID}
)

export const unfollowAC = (userID: number) => (
    {type: UNFOLLOW, userID}
)

export const setUsersAC = (users: Array<userType>) => (
    {type: SET_USERS, users}
)

export default usersPageReducer