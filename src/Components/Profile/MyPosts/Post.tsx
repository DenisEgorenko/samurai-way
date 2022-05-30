import React from "react";
import styles from "./Post.module.css"


type PostProps = {
    message: string
}

function Post(props: PostProps) {
    return (
        <div className={styles.post}>
            <img className={styles.image} src='/avatar.jpg'/>
            {props.message}
            <div>Like</div>
        </div>
    )
}


export default Post