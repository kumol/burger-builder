import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckOutSummary.module.css";
const checkoutSummary = (props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <div style={{height:"300px", width:"100%"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button type="Danger" clicked={()=>props.cancel()}>CANCEL</Button>
            <Button type="Success" clicked={()=>props.continue()}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;