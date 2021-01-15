import React from 'react';
import m from './../Dialogs.module.css';

const Message = (props) => {
    return(
        <div className={m.message}>{props.message}</div>
    )
}

export default Message;