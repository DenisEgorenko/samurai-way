import React from 'react';
import Post from './Post';
import styles from './MyPosts.module.css'
import {postType} from '../../../redux/state';


type myPostsProps = {
    addPost: (postMessage: string)=>void
    postsData: Array<postType>
}

function MyPosts(props: myPostsProps) {

    let postElements = props.postsData.map(post => <Post id={post.id} date={post.date} text={post.text}
                                                         likeCount={post.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost(newPostElement.current ? newPostElement.current.value : '')

        if (newPostElement.current) {
            newPostElement.current.value = ""
        }
    }



    return (
        <div>
            My posts
            <div className={styles.newPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>

            {postElements}


        </div>
    )
}

export default MyPosts