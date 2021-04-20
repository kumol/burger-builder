import React from "react";
import classes from "./Burger.css";
import Ingredients from "./Ingredients/Ingredients";
const Burger = (props) => {
    return(
        <div className={classes.Burger}>
            <Ingredients type="bread-top"></Ingredients>
            <Ingredients type="cheese"></Ingredients>
            <Ingredients type="meat"></Ingredients>
            <Ingredients type="bread-bottom"></Ingredients>
        </div>
    );
}

export default Burger;