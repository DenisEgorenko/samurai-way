import styles from "./Navbar.module.css";
import React from "react";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}><a href="src/Components/Navbar/Navbar#">Profile</a></div>
            <div className={styles.item}><a href="src/Components/Navbar/Navbar#">Messages</a></div>
            <div className={styles.item}><a href="src/Components/Navbar/Navbar#">News</a></div>
            <div className={styles.item}><a href="src/Components/Navbar/Navbar#">Music</a></div>
            <div className={styles.item}><a href="src/Components/Navbar/Navbar#">Settings</a></div>
        </nav>
    )
}


export default Navbar