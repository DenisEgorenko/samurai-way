import React from 'react';
import {
    addMessageAC,
    changeNewMessageTextAC,
    messagePageType
} from '../../redux/messagePageReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    messagePage: messagePageType
}

type mapDispatchToPropsType = {
    addMessage: () => void,
    onMessageChange: (text: string) => void
}

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        onMessageChange: (text: string) => dispatch(changeNewMessageTextAC(text))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

