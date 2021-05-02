import React,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";

class Checkout extends Component {
    state = {
        ingredients:{
            salad:1,
            meat:0,
            bacon:1,
            cheese:0
        }
    }
    checkoutHandler=()=>{
        this.props.history.replace("/checkout/3");
    }
    cancelHandler=()=>{
        this.props.history.goback();
    }
    render(){
        return(
            <CheckoutSummary ingredients={this.state.ingredients} cancel={this.cancelHandler} continue={this.checkoutHandler}></CheckoutSummary>
        )
    }
}

export default Checkout;