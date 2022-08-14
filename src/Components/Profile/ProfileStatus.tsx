import React, {ChangeEvent, useState} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {profilePageType, SetProfileStatusThunk, updateProfileStatusActionCreator} from '../../redux/profilePageReducer';


export function ProfileStatus(props: any) {

    const [editMode, setEditMode] = useState<boolean>(false)

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    const profileData: profilePageType = useSelector<RootState, profilePageType>((state) => state.profilePage)

    const onInputBlurHandler = () => {
        dispatch(SetProfileStatusThunk(profileData.profileStatus))
        setEditMode(false)
    }

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProfileStatusActionCreator(e.currentTarget.value))
    }

    if (!editMode) {
        return <span onDoubleClick={() => setEditMode(!editMode)}>{props.status}</span>
    } else {
        return <input onChange={onInputChangeHandler} autoFocus={true} onBlur={onInputBlurHandler}
                      value={props.status}/>
    }

}