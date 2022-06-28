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
    // addPost: () => void;
    // changeNewPostText: (newPostMessage: string) => void
    state: stateType
    dispatch: (action: { type: string, newPostText?: string, newMessageText?: string }) => void
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
                            () => <Profile dispatch={props.dispatch}
                                           profilePage={props.state.profilePage}
                            />}/>

                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs dispatch={props.dispatch}
                                                      messagePage={props.state.messagePage}
                                                      />}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>

                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
