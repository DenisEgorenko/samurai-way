import React from 'react';
import {
    addPostActionCreator,
    profilePageType,
} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    profilePage: profilePageType
}

type mapDispatchToProps = {
    addPost: (newPostText: string) => void,
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: (newPostText: string) => dispatch(addPostActionCreator(newPostText)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer