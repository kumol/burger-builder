import React from "react";
import classes from './BuildControl.css';
const BuildControl = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.More}>More</button>
        <button className={classes.Less}>less</button>
    </div>
);

export default BuildControl;