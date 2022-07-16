import styles from "./Profile.module.css";
import React from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';


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