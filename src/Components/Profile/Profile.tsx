import styles from "./Profile.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {postType, profilePageType} from '../../redux/store';


type profileProps = {
    profilePage: profilePageType
    dispatch: (action: { type: string, newPostText?: string }) => void
}

function Profile(props: profileProps) {
    return (
        <div className={styles.profile}>
            <div>
                Ava + discr
            </div>
            <MyPosts dispatch={props.dispatch}
                     profilePage={props.profilePage}
            />
        </div>
    )
}


export default Profile