import React from 'react';
import {messagePageType, profilePageType} from '../../../redux/store';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {EmptyObject, Store} from 'redux';
import {MyContext} from '../../../index';


type myPostsContainerProps = {

}

function MyPostsContainer(props: myPostsContainerProps) {

    return (
        <MyContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(changeNewPostTextActionCreator(text))
                    }

                    return <MyPosts addPost={addPost} profilePage={state.profilePage} updateNewPostText={onPostChange}/>
                }
            }
        </MyContext.Consumer>
    )
}

export default MyPostsContainer