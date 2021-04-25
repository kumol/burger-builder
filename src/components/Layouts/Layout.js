import Aux from "../../hoc/Aux";
import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
const Layout = (props) =>{
    return (
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
}

export default Layout;