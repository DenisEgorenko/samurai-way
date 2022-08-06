import styles from './Profile.module.css';
import React, {useEffect} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {profileDataType, profileThunk} from '../../redux/profilePageReducer';
import avatar from '../../assets/images/Профиль.webp';
import {Redirect, useParams} from 'react-router-dom';
import {ThunkDispatch} from 'redux-thunk';


export const Profile = React.memo(function Profile() {

    let location: { id?: string } = useParams()

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    const profileData: profileDataType = useSelector((state: RootState) => state.profilePage.profileData)
    const auth = useSelector((state: RootState) => state.auth)

    const id = location.id ? Number(location.id) : Number(auth.authData.id)


    useEffect(() => {
        dispatch(profileThunk(id))
    }, [])


    if (auth.isAuth === false) return <Redirect to={'/login'}/>


    return (
        <div className={styles.profile}>
            <div>
                <img style={{width: '100px', height: '100px'}}
                     src={profileData.photos.small ? profileData.photos.small : avatar}/>
                <div>
                    {profileData.fullName}
                </div>
                <div>
                    {profileData.aboutMe}
                </div>
                <div>
                    {profileData.lookingForAJobDescription}
                </div>
            </div>

            <MyPostsContainer/>

        </div>
    )
})
