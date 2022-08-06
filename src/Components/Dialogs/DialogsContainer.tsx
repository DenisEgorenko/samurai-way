import React from 'react';
import {
    addMessageAC,
    changeNewMessageTextAC,
    messagePageType
} from '../../redux/messagePageReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {authType} from '../../redux/authReducer';
import {RootState} from '../../redux/redux-store';

type mapStateToPropsType = {
    messagePage: messagePageType,
    isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: () => void,
    onMessageChange: (text: string) => void
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        onMessageChange: (text: string) => dispatch(changeNewMessageTextAC(text))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

