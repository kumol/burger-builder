import classes from "./Button.module.css";
import React from "react";
const Button = (props) => {
    return(
        <button className={[classes.Button,classes[props.type]].join(" ")} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button;