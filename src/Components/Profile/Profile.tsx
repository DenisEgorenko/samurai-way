import styles from "./Profile.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {postType, profilePageType} from '../../redux/store';


type profileProps = {
    addPost: (postMessage: string)=>void
    profilePage: profilePageType
    changeNewPostText: (newPostMessage: string) => void
}

function Profile(props: profileProps) {
    return (
        <div className={styles.profile}>
            <div>
                Ava + discr
            </div>
            <MyPosts addPost={props.addPost}
                     profilePage={props.profilePage}
                     changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}


export default Profile