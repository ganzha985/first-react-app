import React from 'react';
import { NavLink } from 'react-router-dom';
import m from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={m.dialog + " " + m.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;