import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";
const Toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <DrawerToggle clicked={props.clicked}></DrawerToggle>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.Desktopview}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar;