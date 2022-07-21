import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, usersPageType, userType} from "../../redux/usersPageReducer";
import {appStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<userType>) => void,
}

const mapStateToProps = (state: appStateType): usersPageType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=> {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: Array<userType>) => dispatch(setUsersAC(users)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer