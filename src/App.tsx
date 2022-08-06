import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {Users} from "./Components/Users/Users";
import {Login} from './Components/Login/Login';


function App() {

    return (
        <BrowserRouter>
            <div className={styles.app_wrapper}>

                <div className={styles.header_wrapper}>
                    <Header/>
                </div>

                <div className={styles.page_wrapper}>

                    <div className={styles.navbar_wrapper}>
                        <Navbar/>
                    </div>


                    <div className={styles.content_wrapper}>
                        <Route path="/profile/:id" render={
                            () => <Profile/>
                        }/>
                        <Route exact path="/profile" render={
                            () => <Profile/>
                        }/>

                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/users" render={() => <Users/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>

                    </div>

                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
