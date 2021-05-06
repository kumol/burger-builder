import React,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckOutSummary";
import {Route} from "react-router-dom";
import ContactData from "./Contactdata/ContactData";
import Aux from "../../hoc/Aux/Aux";
class Checkout extends Component {
    state = {
        ingredients:{
            salad:0,
            meat:0,
            bacon:0,
            cheese:0
        },
        price:0
    }
    componentWillMount(){
        const params = new URLSearchParams(this.props.location.search);
        let ingredients={};
        let price={};
        for(let param of params.entries()){
            console.log(param);
            param[0]==="price"? price[param[0]]= + param[1] : ingredients[param[0]] = +param[1];
        }
        console.log(price);
        this.setState({
            ingredients:ingredients,
            price:price
        });
    }
    
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
                <CheckoutSummary ingredients={this.state.ingredients} cancel={this.cancelHandler} continue={this.checkoutHandler}></CheckoutSummary>
                <Route path={this.props.match.path+"/contact-data"} render={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.price}/>)}/>
            </Aux>
        )
    }
}

export default Checkout;