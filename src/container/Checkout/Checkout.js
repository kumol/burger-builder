import React,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";
import {Route} from "react-router-dom";
import ContactData from "./Contactdata/ContactData";
import Aux from "../../hoc/Aux/Aux";
import { connect } from "react-redux";
class Checkout extends Component {
    // state = {
    //     ingredients:{
    //         salad:0,
    //         meat:0,
    //         bacon:0,
    //         cheese:0
    //     },
    //     price:0
    // }
    
    checkoutHandler=()=>{
        this.props.history.replace("/checkout/contact-data");
    }
    cancelHandler=()=>{
        this.props.history.goBack();
    }
    render(){
        console.log(this.props.match.path+"/contact-data");
        return(
            <Aux>
                <CheckoutSummary ingredients={this.props.ingredients} cancel={this.cancelHandler} continue={this.checkoutHandler}></CheckoutSummary>
                <Route path={this.props.match.path+"/contact-data"} component={ContactData} />
            </Aux>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ingredients : state.ingredients,
        price : state.price
    }
}

export default connect(mapStateToProps)(Checkout);