import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {RootState} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {authThunk} from '../../redux/authReducer';
import {ThunkDispatch} from 'redux-thunk';
import {authAPI} from '../../api/api';


function Header() {

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    const logOut = () => {
        dispatch(authAPI.logOut).then()
    }

    return (
        <header className={styles.header}>
            <a href={'/profile'}>
                <img src="/logo.png"/>
            </a>

            <div className={styles.loginBlock}>
                {auth.isAuth ? <div onClick={logOut}>{auth.authData.login}</div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header