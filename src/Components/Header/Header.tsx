import React from "react";
import styles from "./Header.module.css";


function Header() {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/2048px-VK.com-logo.svg.png"/>
        </header>
    )
}


export default Header