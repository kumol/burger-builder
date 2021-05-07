import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    let inputArea=null;
    switch(props.inputtype){
        case("input"):
            inputArea = <input className={classes.InputElement} {...props}/>
            break;
        case("text-area"):
            inputArea = <textarea className={classes.InputElement} {...props}/>
            break;
        default:
            inputArea = <input className={classes.InputElement} {...props}/>
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputArea}
        </div>
    )
}

export default Input;