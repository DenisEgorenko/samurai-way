import styles from './Profile.module.css';
import React, {useEffect} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {profilePageType, profileThunk} from '../../redux/profilePageReducer';
import avatar from '../../assets/images/Профиль.webp';
import {useParams} from 'react-router-dom';
import {ThunkDispatch} from 'redux-thunk';
import {ProfileStatus} from './ProfileStatus';


export const Profile = React.memo(function Profile() {

    let location: { id?: string } = useParams()

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    const profileData: profilePageType = useSelector<RootState, profilePageType>((state) => state.profilePage)
    const auth = useSelector((state: RootState) => state.auth)

    const id = location.id ? Number(location.id) : Number(auth.authData.id)


    useEffect(() => {
        dispatch(profileThunk(id))
    }, [])


    return (
        <div className={styles.profile}>
            <div>
                <img style={{width: '100px', height: '100px'}}
                     src={profileData.profileData.photos.small ? profileData.profileData.photos.small : avatar}/>
                <div>
                    {profileData.profileData.fullName}
                </div>
                <div>
                    {profileData.profileData.lookingForAJobDescription}
                </div>

                <ProfileStatus status={profileData.profileStatus}/>
            </div>

            <MyPostsContainer/>

        </div>
    )
})

