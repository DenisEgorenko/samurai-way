import React from 'react';
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';


function App() {
    return (
        <BrowserRouter>
            <div className={styles.app_wrapper}>
                <div className={styles.header_wrapper}>
                    <Header/>
                </div>

                <div className={styles.page_wrapper}>
                    <div className={styles.navbar_wrapper}>
                        <Navbar />
                    </div>

                    <div className={styles.content_wrapper}>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/news" component={News}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
