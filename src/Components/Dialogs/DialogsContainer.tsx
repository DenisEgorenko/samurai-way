import React from 'react';
import {addMessageAC, messagePageType} from '../../redux/messagePageReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../../redux/redux-store';

type mapStateToPropsType = {
    messagePage: messagePageType,
    isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void,
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => dispatch(addMessageAC(newMessageText)),
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

