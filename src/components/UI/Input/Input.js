import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    let inputArea=null;
    const className = [classes.InputElement];
    if(props.isValid && props.shouldValidate && props.touched){
        className.push(classes.Invalid);
    }
    switch(props.elementType){
        case("input"):
            inputArea = <input className={className.join(" ")} {...props.elementConfig} onChange={props.onChange}/>
            break;
        case("text-area"):
            inputArea = <textarea className={className.join(" ")} {...props.elementConfig} onChange={props.onChange}/>
            break;
        case("select"):
            inputArea = (<select className={className.join(" ")} value={props.value} onChange={props.onChange}>
                {props.elementConfig.option.map((option,index)=>{
                    return <option key={option.value+index} value={option.value}>{option.displayValue}</option>
                })}
            </select>)
            break;
        default:
            inputArea = <input className={className.join(" ")} {...props.inputConfig} onChange={props.onChange}/>
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputArea}
        </div>
    )
}

export default Input;