import React from 'react';
import {
    addPostActionCreator,
    changeNewPostTextActionCreator, profilePageType,
} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {appStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profilePage: profilePageType
}

type mapDispatchToProps = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(changeNewPostTextActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer