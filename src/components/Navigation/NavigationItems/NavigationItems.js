import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                BurgerBuilder
            </NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems;