import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {AppDispatch, RootState} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthDataAC} from '../../redux/authReducer';
import {authAPI} from '../../api/api';


function Header() {

    const dispatch: AppDispatch = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        authAPI.getAuth().then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthDataAC(res.data))
            }
        })
    }, [])

    return (
        <header className={styles.header}>
            <a href={'/profile'}>
                <img src="/logo.png"/>
            </a>

            <div className={styles.loginBlock}>
                {auth.isAuth ? auth.authData.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header