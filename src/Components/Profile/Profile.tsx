import styles from "./Profile.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {postType} from '../../redux/state';


type profileProps = {
    addPost: (postMessage: string)=>void
    postsData: Array<postType>
}

function Profile(props: profileProps) {
    return (
        <div className={styles.profile}>
            <div>
                Ava + discr
            </div>
            <MyPosts addPost={props.addPost} postsData={props.postsData}/>
        </div>
    )
}


export default Profile