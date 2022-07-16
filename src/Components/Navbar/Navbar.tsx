import styles from './Navbar.module.css';
import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

function Navbar() {

    const link = useLocation()

    return (

        <div className={styles.navbar}>

            <nav className={styles.nav}>

                <NavLink className={`${styles.item} ${link.pathname === '/profile' && styles.active_item}`}
                         to="/profile">Профиль</NavLink>

                <NavLink className={`${styles.item} ${link.pathname === '/users' && styles.active_item}`}
                         to="/users">Пользователи</NavLink>

                <NavLink className={`${styles.item} ${link.pathname === '/news' && styles.active_item}`}
                         to="/news">Новости</NavLink>

                <NavLink className={`${styles.item} ${link.pathname === '/dialogs' && styles.active_item}`}
                         to="/dialogs">Сообщения</NavLink>

                <NavLink className={`${styles.item} ${link.pathname === '/music' && styles.active_item}`}
                         to="/music">Музыка</NavLink>

                <NavLink className={`${styles.item} ${link.pathname === '/settings' && styles.active_item}`}
                         to="/settings">Настройки</NavLink>

            </nav>


            <div className={styles.sideBar}>
                <b>Friends</b>
                <div className={styles.friendsBlock}>
                    <a href={'#'} className={styles.friend}>
                        <img className={styles.image} src="/avatar.jpg"/>
                        <div>Name</div>
                    </a>
                    <a href={'#'} className={styles.friend}>
                        <img className={styles.image} src="/avatar.jpg"/>
                        <div>Name</div>
                    </a>
                    <a href={'#'} className={styles.friend}>
                        <img className={styles.image} src="/avatar.jpg"/>
                        <div>Name</div>
                    </a>
                    <a href={'#'} className={styles.friend}>
                        <img className={styles.image} src="/avatar.jpg"/>
                        <div>Name</div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Navbar