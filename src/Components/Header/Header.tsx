import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {RootState} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {authThunk} from '../../redux/authReducer';
import {ThunkDispatch} from 'redux-thunk';


function Header() {

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)


    useEffect(() => {
        dispatch(authThunk())
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