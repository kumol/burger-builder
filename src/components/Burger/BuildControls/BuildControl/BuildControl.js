import React from "react";
import classes from './BuildControl.module.css';
const BuildControl = (props)=>(
    
    <div className={classes.BuildControl}>

<p>{props.disable}</p>
        <div className={classes.label}>{props.label}</div>
        <div>{props.disable.toString()}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disable}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default BuildControl;