// import React from 'react';
// import {connect} from "react-redux";
// import {Users} from "./Users";
// import {
//     followAC,
//     setCurrentPageAC, setTotalUsersCountAC,
//     setUsersAC,
//     unfollowAC,
//     usersPageType,
//     userType
// } from "../../redux/usersPageReducer";
// import {appStateType} from "../../redux/redux-store";
// import {Dispatch} from "redux";
//
// export type mapDispatchToPropsType = {
//     follow: (userID: number) => void,
//     unfollow: (userID: number) => void,
//     setUsers: (users: Array<userType>) => void,
//     setCurrentPage: (pageNumber: number) => void,
//     setTotalUsersCount: (totalUsersCount: number) => void,
//
// }
//
// const mapStateToProps = (state: appStateType): usersPageType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => dispatch(followAC(userID)),
//         unfollow: (userID: number) => dispatch(unfollowAC(userID)),
//         setUsers: (users: Array<userType>) => dispatch(setUsersAC(users)),
//         setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
//         setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
//     }
// }
//
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
//
export default null