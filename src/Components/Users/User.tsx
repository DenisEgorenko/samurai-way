import React from 'react'
import {userType} from "../../redux/usersPageReducer";
import styles from './user.module.css'

type userPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
}

function User(props: userPropsType & userType) {
    return (
        <div className={styles.user_wrapper}>
            <div className={styles.left_side}>
                <img className={styles.user_avatar} src={props.photoUrl}/>
                {props.followed
                    ? <button className={styles.button} onClick={() => props.unfollow(props.id)}>Unfollow</button>
                    : <button className={styles.button} onClick={() => props.follow(props.id)}>Follow</button>}
            </div>

            <div className={styles.right_side}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>{props.fullName}</div>

                <div>
                    <div style={{opacity: '0.4', fontSize: '14px'}}>{props.location.country}, {props.location.city}</div>
                </div>

                <div style={{marginTop: '10px'}}>{props.status}</div>
            </div>
        </div>
    )
}


export default User