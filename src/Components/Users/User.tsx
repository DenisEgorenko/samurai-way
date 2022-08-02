import React from 'react'
import {
    addFollowingUserAC,
    followAC, removeFollowedUserAC,
    unfollowAC,
    userType
} from '../../redux/usersPageReducer';
import styles from './user.module.css'
import avatar from '../../assets/images/Профиль.webp'
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/redux-store';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {fork} from 'child_process';
import {followAPI} from '../../api/api';

type userPropsType = {
    followingInProgress: number[]
}

function User(props: userPropsType & userType) {

    const dispatch: AppDispatch = useDispatch()

    const unFollowClickHandler = () => {
        dispatch(addFollowingUserAC(props.id))
        followAPI.unFollow(props.id).then(res => {
            if (res.resultCode === 0) {
                dispatch(unfollowAC(props.id))
            }
            dispatch(removeFollowedUserAC(props.id))
        })
    }

    const followClickHandler = () => {
        dispatch(addFollowingUserAC(props.id))
        followAPI.follow(props.id).then(res => {
            if (res.resultCode === 0) {
                dispatch(followAC(props.id))
            }
            dispatch(removeFollowedUserAC(props.id))
        })
    }

    return (
        <div className={styles.user_wrapper}>
            <div className={styles.left_side}>
                <NavLink to={'/profile/' + props.id}><img className={styles.user_avatar}
                                                          src={props.photos.small ? props.photos.small : avatar}/></NavLink>

                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.id)} className={styles.button} onClick={unFollowClickHandler}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)} className={styles.button} onClick={followClickHandler}>Follow</button>}

            </div>

            <div className={styles.right_side}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>{props.name}</div>
                <div style={{marginTop: '10px'}}>{props.status}</div>
            </div>
        </div>
    )
}


export default User