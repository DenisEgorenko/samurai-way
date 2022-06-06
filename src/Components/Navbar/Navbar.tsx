import styles from "./Navbar.module.css";
import React from "react";
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (

        <div>
            <nav className={styles.nav}>
                <div className={styles.item}><NavLink activeClassName={styles.active_item}
                                                      to="/profile">Profile</NavLink></div>
                <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/news">News</NavLink>
                </div>
                <div className={styles.item}><NavLink activeClassName={styles.active_item}
                                                      to="/dialogs">Dialogs</NavLink></div>
                <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/music">Music</NavLink>
                </div>
                <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/settings">Settings</NavLink></div>
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
                </div>
            </div>
        </div>
    )
}


export default Navbar