import Aux from "../../hoc/Aux";
import React from "react";
const Layout = (props) =>{
    return (
        <Aux>
            <div>App Drawer </div>
            <main>{props.children}</main>
        </Aux>
    );
}

export default Layout;