import React from "react";
import classes from "./Order.module.css";
const Order = (props)=>{
    const ingredients =[]
    for(let key in props.order.ingredients){
        ingredients.push({
            name:key,
            amount:props.order.ingredients[key]
        });
    }
    const ingOutput = ingredients.map(ingredient=>{
        return <span 
                style={{
                    textTransform:"capitalize",
                    display:"inline-block",
                    margin:"0 8px",
                    border:"1px solid #ccc",
                    padding:"5px"
                }} 
                key={ingredient.name}>{ingredient.name}({ingredient.amount})</span>
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients {ingOutput}</p>
            <p>Price: <strong>USD {props.order.price}</strong></p>
        </div>
    )
}

export default Order;