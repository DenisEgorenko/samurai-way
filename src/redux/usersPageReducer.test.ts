import {
    addFollowingUserAC,
    usersPageReducer,
    followAC,
    removeFollowedUserAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC,
    unfollowAC,
    usersPageType, userType
} from './usersPageReducer';


test('User should be followed', () => {

    let initialState: usersPageType = {
        users: [
            {
                id: 1,
                photos: {small: 'string', large: ''},
                name: 'string',
                followed: true,
                status: 'string'
            },
            {
                id: 2,
                photos: {small: 'string', large: 'string'},
                name: 'string',
                followed: false,
                status: 'string'
            },
        ],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33]
    }

    const resultState = usersPageReducer(initialState, followAC(2))

    expect(resultState.users[0].followed).toBe(true)
    expect(resultState.users[1].followed).toBe(true)
})

test('User should be unfollowed', () => {

    let initialState: usersPageType = {
        users: [
            {
                id: 1,
                photos: {small: 'string', large: ''},
                name: 'string',
                followed: true,
                status: 'string'
            },
            {
                id: 2,
                photos: {small: 'string', large: 'string'},
                name: 'string',
                followed: false,
                status: 'string'
            },
        ],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33]
    }

    const resultState = usersPageReducer(initialState, unfollowAC(1))

    expect(resultState.users[0].followed).toBe(false)
    expect(resultState.users[1].followed).toBe(false)
})

test('Users should be added', () => {

    let initialState: usersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33]
    }

    const usersInfo: userType[] = [
        {
            id: 1,
            photos: {small: 'string', large: ''},
            name: 'string',
            followed: true,
            status: 'string'
        },
        {
            id: 2,
            photos: {small: 'string', large: 'string'},
            name: 'string',
            followed: false,
            status: 'string'
        },
    ]

    const resultState = usersPageReducer(initialState, setUsersAC(usersInfo))

    expect(resultState.users.length).toBe(2)
})

test('Current page should be set right', () => {

    let initialState: usersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33]
    }
    const resultState = usersPageReducer(initialState, setCurrentPageAC(10))

    expect(resultState.currentPage).toBe(10)
})

test('Total users should be set right', () => {

    let initialState: usersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33]
    }
    const resultState = usersPageReducer(initialState, setTotalUsersCountAC(50))

    expect(resultState.totalUsersCount).toBe(50)
})

test('Fetching should be set right', () => {

    let initialState: usersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [33]
    }
    const resultState1 = usersPageReducer(initialState, setIsFetchingAC(true))

    expect(resultState1.isFetching).toBe(true)

    const resultState2 = usersPageReducer(initialState, setIsFetchingAC(false))

    expect(resultState2.isFetching).toBe(false)
})

test('Following user should be added', () => {

    let initialState: usersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33]
    }

    const resultState = usersPageReducer(initialState, addFollowingUserAC(44))

    expect(resultState.followingInProgress[0]).toBe(33)
    expect(resultState.followingInProgress[1]).toBe(44)
})

test('Following user should be added', () => {

    let initialState: usersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [33, 44]
    }

    const resultState = usersPageReducer(initialState, removeFollowedUserAC(44))

    expect(resultState.followingInProgress.length).toBe(1)

})