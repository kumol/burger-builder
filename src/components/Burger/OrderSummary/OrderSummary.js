import React from "react";
import Aux from "../../../hoc/Aux";

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
        </Aux>
    );
}

export default OrderSummary;