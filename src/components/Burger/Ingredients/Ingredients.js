import React from "react";
import classes from "./ingredints.css";
const Ingredints = (props) => {
    let ingredints = null;
    switch(props.type){
        case("BreadBottom"):
            ingredints = <div className={classes.BreadBottom}>BreadBottom</div>
            break;
        case ('bread-top') :
            ingredints = (<div className={classes.BreadTop}>
                <div className={classes.salad1}></div>
                <div className={classes.salad2}></div>
            </div>);
            break;
        case ('meat') :
            ingredints = <div className={classes.Meat}></div>
            break;
        case ('cheese') :
            ingredints = <div className={classes.Cheese}></div>
            break;
        case ('bacon') :
            ingredints = <div className={classes.Bacon}></div>
            break;
        case ('salad') :
            ingredints = <div className={classes.Salad}></div>
            break;
        default:
            ingredints = null;
    }
    return ingredints;
};

export default Ingredients;