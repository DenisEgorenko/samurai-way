import React from "react";
import Post from "./Post";
import styles from "MyPosts.module.css"

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi"/>
            <Post message="My name is"/>
            <Post message="I'm learning React"/>
            <Post message="Hi"/>
            <Post message="Hi"/>
            <Post message="Hi"/>
            <Post message="Hi"/>
        </div>
    )
}

export default MyPosts