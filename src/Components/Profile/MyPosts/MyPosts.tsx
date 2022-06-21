import React, {ChangeEvent, MouseEvent} from 'react';
import Post from './Post';
import styles from './MyPosts.module.css'
import {profilePageType} from '../../../redux/store';


type myPostsProps = {
    addPost: (postMessage: string) => void
    profilePage: profilePageType
    changeNewPostText: (newPostMessage: string) => void
}

function MyPosts(props: myPostsProps) {

    let postElements = props.profilePage.postsData.map(post =>
        <Post id={post.id}
              date={post.date}
              text={post.text}
              likeCount={post.likeCount}
        />)

    const addPost = () => {
        props.addPost(props.profilePage.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
    }


    return (
        <div>
            My posts
            <div className={styles.newPost}>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>

            {postElements}

        </div>
    )
}

export default MyPosts