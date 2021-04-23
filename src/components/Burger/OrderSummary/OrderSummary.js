import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) =>{
    const ingredients = Object.keys(props.ingredients).map((ingk,i)=>{
        return (<li key={ingk+i}>
            <span>{ingk}</span>:
            {props.ingredients[ingk]}
        </li>);
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your Burger with ingredients bellow</p>
            {ingredients}
            <Button type={"Danger"} clicked={()=>{props.cancel()}}>CANCEL</Button>
            <Button type={"Success"} clicked={()=>{props.continue()}}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;