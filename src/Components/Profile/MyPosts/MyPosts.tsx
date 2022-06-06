import React from "react";
import Post from "./Post";
import styles from "./MyPosts.module.css"
import {postType} from '../../../redux/state';


type myPostsProps = {
    postsData: Array<postType>
}

function MyPosts(props: myPostsProps) {

    let postElements = props.postsData.map(post=><Post id={post.id} date={post.date} text={post.text} likeCount={post.likeCount}/>)

    return (
        <div>
            My posts
            <div className={styles.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            {postElements}


        </div>
    )
}

export default MyPosts