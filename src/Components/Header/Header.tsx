import React from "react";
import styles from "./Header.module.css";


function Header() {
    return (
        <header className={styles.header}>
            <a href={'/profile'}>
                <img src="/logo.png"/>
            </a>
        </header>
    )
}


export default Header