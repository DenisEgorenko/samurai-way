import React from 'react'
import {followThunk, unFollowThunk, userType} from '../../redux/usersPageReducer';
import styles from './user.module.css'
import avatar from '../../assets/images/Профиль.webp'
import {useDispatch} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {NavLink} from 'react-router-dom';
import {ThunkDispatch} from 'redux-thunk';

type userPropsType = {
    followingInProgress: number[]
}

function User(props: userPropsType & userType) {

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()

    const unFollowClickHandler = () => {
        dispatch(unFollowThunk(props.id))

    }

    const followClickHandler = () => {
        dispatch(followThunk(props.id))
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