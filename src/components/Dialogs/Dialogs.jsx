import React from 'react';
import { NavLink } from 'react-router-dom';
import m from './Dialogs.module.css';

let dialogInfo = [
    {id: 1, name: 'Dima1'},
    {id: 2, name: 'Dima2'},
    {id: 3, name: 'Dima3'},
    {id: 4, name: 'Dima4'},
] 

let messagesData = [
    {id: 1, message: 'hi2'},
    {id: 2, message: 'hi2'},
    {id: 3, message: 'hi2'},
    {id: 4, message: 'hi2'},
] 




const DialogItem = (props) => {
    return (
        <div className={m.dialog + " " + m.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={m.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialog_items}>
                <DialogItem name={dialogInfo[0].name} id={dialogInfo[0].id}/>
            </div>
            <div className={m.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>               
            </div>
        </div>
    )
}

export default Dialogs;