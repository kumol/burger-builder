import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from "./Sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux/Aux';
const Sidedrawer = (props) => {
    let attachClasses = [classes.Sidedrawer,classes.Close];
    if(props.show){
        attachClasses = [classes.Sidedrawer,classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked}></Backdrop>
            <div className={attachClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}
export default Sidedrawer;