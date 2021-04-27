import Aux from "../Aux/Aux";
import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";
class Layout extends Component {
    state={
        showSideDrawer:false,
    }
    sideDrawerController = () =>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerControllerFromToolbar = () => {
        this.setState((prevState)=>{
            return{
                showSideDrawer:!prevState.showSideDrawer
            }
        })
    }
    render(){
        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerControllerFromToolbar}/>
                <Sidedrawer show={this.state.showSideDrawer} clicked={this.sideDrawerController}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;