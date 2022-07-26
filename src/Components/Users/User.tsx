import React from 'react'
import {followAC, unfollowAC, userType} from "../../redux/usersPageReducer";
import styles from './user.module.css'
import avatar from '../../assets/images/Профиль.webp'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import { NavLink } from 'react-router-dom';

type userPropsType = {

}

function User(props: userPropsType & userType) {

    const dispatch: AppDispatch = useDispatch()

    return (
        <div className={styles.user_wrapper}>
            <div className={styles.left_side}>
                <NavLink to={'/profile/' + props.id}><img className={styles.user_avatar}
                              src={props.photos.small ? props.photos.small : avatar}/></NavLink>
                {props.followed
                    ? <button className={styles.button} onClick={() => dispatch(unfollowAC(props.id))}>Unfollow</button>
                    : <button className={styles.button} onClick={() => dispatch(followAC(props.id))}>Follow</button>}
            </div>

            <div className={styles.right_side}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>{props.name}</div>
                <div style={{marginTop: '10px'}}>{props.status}</div>
            </div>
        </div>
    )
}


export default User