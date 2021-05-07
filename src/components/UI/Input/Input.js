import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    let inputArea=null;
    switch(props.elementType){
        case("input"):
            inputArea = <input className={classes.InputElement} {...props.elementConfig}/>
            break;
        case("text-area"):
            inputArea = <textarea className={classes.InputElement} {...props.elementConfig}/>
            break;
        case("select"):
            inputArea = (<select className={classes.InputElement} value={props.value}>
                {props.elementConfig.option.map((option,index)=>{
                    return <option key={option.value+index} value={option.value}>{option.displayValue}</option>
                })}
            </select>)
            break;
        default:
            inputArea = <input className={classes.InputElement} {...props.inputConfig}/>
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputArea}
        </div>
    )
}

export default Input;