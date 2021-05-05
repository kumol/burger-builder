import React,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";

class Checkout extends Component {
    state = {
        ingredients:{
            salad:0,
            meat:0,
            bacon:0,
            cheese:0
        }
    }
    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        let ingredients={}
        for(let param of params.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients:ingredients
        });
    }
    
    checkoutHandler=()=>{
        this.props.history.replace("/checkout");
    }
    cancelHandler=()=>{
        this.props.history.goBack();
    }
    render(){
        return(
            <CheckoutSummary ingredients={this.state.ingredients} cancel={this.cancelHandler} continue={this.checkoutHandler}></CheckoutSummary>
        )
    }
}

export default Checkout;