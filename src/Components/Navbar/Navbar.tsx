import styles from "./Navbar.module.css";
import React from "react";
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/profile">Profile</NavLink></div>
            <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/news">News</NavLink></div>
            <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/dialogs">Dialogs</NavLink></div>
            <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/music">Music</NavLink></div>
            <div className={styles.item}><NavLink activeClassName={styles.active_item} to="/settings">Settings</NavLink></div>
        </nav>
    )
}


export default Navbar