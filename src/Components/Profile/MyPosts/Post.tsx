import React from "react";
import styles from "./Post.module.css"


type PostProps = {
    message: string
}

function Post(props: PostProps) {
    return (
        <div>
            <img className={styles.image} src="https://sun9-west.userapi.com/sun9-39/s/v1/ig2/g9beK0s3joiCPAB6aTBOfp1nrGz7fx17U3-aJFXuMpbVmsnEApVWtp4VIMQkE5LLigK4ROY82xfI9x1OnVbMSf54.jpg?size=1520x2048&quality=95&type=album"/>
            {props.message}
            <div>Like</div>
        </div>
    )
}


export default Post