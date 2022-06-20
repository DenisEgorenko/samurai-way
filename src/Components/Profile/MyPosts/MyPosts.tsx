import React from 'react';
import Post from './Post';
import styles from './MyPosts.module.css'
import {postType, profilePageType} from '../../../redux/state';


type myPostsProps = {
    addPost: (postMessage: string) => void
    profilePage: profilePageType
    changeNewPostText: (newPostMessage: string) => void
}

function MyPosts(props: myPostsProps) {

    let postElements = props.profilePage.postsData.map(post => <Post id={post.id} date={post.date} text={post.text}
                                                         likeCount={post.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost(newPostElement.current ? newPostElement.current.value : '')
    }

    const onPostChange = () => {
        props.changeNewPostText(newPostElement.current ? newPostElement.current.value: '')
    }


    return (
        <div>
            My posts
            <div className={styles.newPost}>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement}/>
                <button onClick={addPost}>Add post</button>
            </div>

            {postElements}


        </div>
    )
}

export default MyPosts