import {Redirect} from 'react-router-dom';
import React, {ComponentType, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {authThunk, authType} from '../redux/authReducer';
import {ThunkDispatch} from 'redux-thunk';
import {Preloader} from '../Components/Preloader/Preloader';

export function CheckAuthHOC(Component: ComponentType) {

    function RedirectComponent(props: any) {

        const auth = useSelector<RootState, authType>((state) => state.auth)


        if (!auth.isAuth) {
            return <Redirect to={'/login'}/>
        } else {
            return <Component {...props}/>
        }
    }

    return <RedirectComponent/>
}