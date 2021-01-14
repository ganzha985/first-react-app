import React from 'react';
import m from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialog_items }>
                <div className={m.dialog + " " + m.active}>
                    Andrey
                </div>
                <div className={m.dialog}>
                    Andrey
                </div>
                <div className={m.dialog}>
                    Andrey
                </div>   
            </div>
            <div className={m.messages}>
                <div className={m.message}> mes 1</div>
                <div className={m.message}> mes 2</div>
                <div className={m.message}> mes 3</div>
            </div>
        </div>
    )
}

export default Dialogs;