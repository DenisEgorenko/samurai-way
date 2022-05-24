import React from 'react';
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";


function App() {
    return (
        <div className={styles.app_wrapper}>
            <div className={styles.header_wrapper}>
                <Header/>
            </div>

            <div className={styles.page_wrapper}>
                <div className={styles.navbar_wrapper}>
                    <Navbar/>
                </div>

                <div className={styles.content_wrapper}>
                    <Profile/>
                </div>
            </div>


        </div>
    );
}


export default App;
