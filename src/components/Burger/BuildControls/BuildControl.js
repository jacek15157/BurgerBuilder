import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
   
  
    return (
        <div className={classes.BuildControl}>
        
            <div className={classes.Label}>{props.ingridientLabel}</div>
            <button className={classes.More} onClick={props.added} >More</button>
            <button className={classes.Less} onClick={props.subtracted} disabled={props.disabled}>Less</button>
        </div>
    );
};

export default buildControl;