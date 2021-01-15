import React from 'react';
//import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import m from './Dialogs.module.css';
import Message from './Messages/Messages';

const Dialogs = (props) => {
    let dialogsElements = props.dialogInfo.map((dialog) =>{ return <DialogItem name={dialog.name} id={dialog.id}/>})
    let messageElements = props.messagesData.map((message) => { return <Message id={message.id} message={message.message}/>})
    return (
        <div className={m.dialogs}>
            <div className={m.dialog_items}>
                {dialogsElements}
            </div>
            <div className={m.messages}>
                {messageElements}          
            </div>
        </div>
    )
}

export default Dialogs;