import React from "react";
import styles from "./Post.module.css"


type PostProps = {
    id: number,
    date: string,
    text: string,
    likeCount:number
}

function Post(props: PostProps) {
    return (
        <div className={styles.post}>
            <img className={styles.image} src='/avatar.jpg'/>
            {props.text}
            <div>Likes: {props.likeCount}</div>
        </div>
    )
}


export default Post