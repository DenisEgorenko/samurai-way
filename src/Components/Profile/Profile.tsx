import styles from "./Profile.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {messagePageType, postType, profilePageType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {EmptyObject, Store} from 'redux';


type profileProps = {

}

function Profile(props: profileProps) {
    return (
        <div className={styles.profile}>
            <div>
                Ava + discr
            </div>

            <MyPostsContainer/>

        </div>
    )
}


export default Profile