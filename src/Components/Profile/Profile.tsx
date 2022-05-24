import styles from "./Profile.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={styles.profile}>
            <div>
                Ava + discr
            </div>
            <MyPosts/>
        </div>
    )
}


export default Profile