import React, {PropsWithChildren} from 'react';
import Post from './Post';
import styles from './MyPosts.module.css'
import {profilePageType} from '../../../redux/profilePageReducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


type myPostsProps = {
    profilePage: profilePageType,
    addPost: (newPostText: string) => void;
}

type formData = {
    newPostText: string,
}

function MyPosts(props: myPostsProps) {

    let postElements = props.profilePage.postsData.map(post =>
        <Post id={post.id}
              date={post.date}
              text={post.text}
              likeCount={post.likeCount}
        />)


    const addPost = (values: formData) => {
        console.log()
        props.addPost(values.newPostText)
    }

    return (
        <div>
            My posts
            <div className={styles.newPost}>
                <AddNewPostForm onSubmit={addPost}/>
            </div>

            {postElements}
        </div>
    )
}

const AddNewPostForm = reduxForm<formData>({form: 'ProfileAddNewPostForm'})((props: PropsWithChildren<InjectedFormProps<formData>>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} placeholder={'Введите сообщение'} component={'textarea'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
})

export default MyPosts