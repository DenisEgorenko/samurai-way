import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'aa19c4a6-4fef-4563-97b0-4ec3a65b0ffa'}
})

export const usersAPI = {
    getUsers(pageSize: number = 1, currentPage: number = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(res => res.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me').then(res => res.data)
    }
}

export const followAPI = {
    follow(userID: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`).then(res => res.data)
    },

    unFollow(userID: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`).then(res => res.data)
    }
}

export const profileAPI = {
    getProfileData(id: number) {
        return instance.get(`profile/${id}`)
    }
}