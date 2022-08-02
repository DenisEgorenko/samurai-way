import styles from "./Profile.module.css";
import React, {useEffect} from "react";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {setIsFetchingAC, setTotalUsersCountAC, setUsersAC} from "../../redux/usersPageReducer";
import axios from "axios";
import {addProfileDataActionCreator, profileDataType} from "../../redux/profilePageReducer";
import avatar from "../../assets/images/Профиль.webp";
import {useLocation, useParams, withRouter} from "react-router-dom";


export const Profile = React.memo(function Profile() {

    let location: { id?: string } = useParams()

    const dispatch: AppDispatch = useDispatch()
    const profileData: profileDataType = useSelector((state: RootState) => state.profilePage.profileData)
    const auth = useSelector((state: RootState) => state.auth)


    useEffect(() => {
        dispatch(setIsFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${location.id ? location.id : auth.authData.id}`).then(res => {
            dispatch(addProfileDataActionCreator(res.data))
            dispatch(setIsFetchingAC(false))
        })
    }, [])

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
