export type userType = {
    id: number,
    photos: { small: string, large: string }
    name: string,
    followed: boolean,
    status: string,
}


export type usersPageType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export type followActionType = {
    type: 'FOLLOW',
    userID: number,
}

export type unFollowActionType = {
    type: 'UNFOLLOW',
    userID: number,
}

export type setUsersActionType = {
    type: 'SET_USERS',
    users: Array<userType>
}
export type setCurrenPageActionType = {
    type: 'SET_CURRENT_PAGE',
    pageNumber: number
}

export type setTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount: number
}

export type setIsFetchingActionType = {
    type: 'SET_IS_FETCHING',
    isFetching: boolean
}


type actionType =
    followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrenPageActionType
    | setTotalUsersCountActionType
    | setIsFetchingActionType

let initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
}


const usersPageReducer = (state: usersPageType = initialState, action: actionType): usersPageType => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}

        case 'SET_USERS':
            return {...state, users: [...action.users]}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.pageNumber}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}

        case "SET_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const followAC = (userID: number) => (
    {type: 'FOLLOW', userID}
)

export const unfollowAC = (userID: number) => (
    {type: 'UNFOLLOW', userID}
)

export const setUsersAC = (users: Array<userType>) => (
    {type: 'SET_USERS', users}
)

export const setCurrentPageAC = (pageNumber: number) => (
    {type: 'SET_CURRENT_PAGE', pageNumber}
)

export const setTotalUsersCountAC = (totalUsersCount: number) => (
    {type: 'SET_TOTAL_USERS_COUNT', totalUsersCount}
)

export const setIsFetchingAC = (isFetching: boolean) => (
    {type: 'SET_IS_FETCHING', isFetching}
)

export default usersPageReducer