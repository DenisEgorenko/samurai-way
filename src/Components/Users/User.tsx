import React from 'react'
import {userType} from "../../redux/usersPageReducer";
import styles from './user.module.css'
import avatar from '../../assets/images/Профиль.webp'

type userPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
}

function User(props: userPropsType & userType) {
    return (
        <div className={styles.user_wrapper}>
            <div className={styles.left_side}>
                <img className={styles.user_avatar} src={props.photos.small ? props.photos.small : avatar}/>
                {props.followed
                    ? <button className={styles.button} onClick={() => props.unfollow(props.id)}>Unfollow</button>
                    : <button className={styles.button} onClick={() => props.follow(props.id)}>Follow</button>}
            </div>

            <div className={styles.right_side}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>{props.name}</div>
                <div style={{marginTop: '10px'}}>{props.status}</div>
            </div>
        </div>
    )
}


export default User