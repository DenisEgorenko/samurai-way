import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {stateType, storeType} from './redux/store'

type appPropsType = {
    addPost: (postMessage: string) => void;
    changeNewPostText: (newPostMessage: string) => void
    state: stateType
}


function App(props: appPropsType) {

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
                        <Route path="/profile" render={
                            () => <Profile addPost={props.addPost}
                                           profilePage={props.state.profilePage}
                                           changeNewPostText={props.changeNewPostText}
                            />}/>

                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs dialogsData={props.state.messagePage.dialogsData}
                                                      messageData={props.state.messagePage.messageData}/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>

                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
