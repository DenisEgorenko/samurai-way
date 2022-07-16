import React from 'react';
import {
    addMessageActionCreator,
    changeNewMessageTextActionCreator,
    messagePageType
} from '../../redux/messagePageReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from "redux";

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
        addMessage: () => dispatch(addMessageActionCreator()),
        onMessageChange: (text: string) => dispatch(changeNewMessageTextActionCreator(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer