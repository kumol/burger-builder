import React from "react";
import classes from "./Ingredients.css";
//import PropTypes from 'prop-types';
const Ingredients = (props) => {
    let ingredients = null;
    switch(props.type){
        case("BreadBottom"):
            ingredients = <div className={classes.BreadBottom}>BreadBottom</div>
            break;
        case ('bread-top') :
            ingredients = (<div className={classes.BreadTop}>
                <div className={classes.salad1}></div>
                <div className={classes.salad2}></div>
            </div>);
            break;
        case ('meat') :
            ingredients = <div className={classes.Meat}></div>
            break;
        case ('cheese') :
            ingredients = <div className={classes.Cheese}></div>
            break;
        case ('bacon') :
            ingredients = <div className={classes.Bacon}></div>
            break;
        case ('salad') :
            ingredients = <div className={classes.Salad}></div>
            break;
        default:
            ingredients = null;
    }
    return ingredients; 
};

// Ingredients.PropTypes = {
//     type: PropTypes.string.isRequired
// };

export default Ingredients;