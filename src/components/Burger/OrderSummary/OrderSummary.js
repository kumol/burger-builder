import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{
    componentDidUpdate(){
        console.log("Component Updated");
    }
    render (){
        const ingredients = Object.keys(this.props.ingredients).map((ingk,i)=>{
            return (<li key={ingk+i}>
                <span>{ingk}</span>:
                {this.props.ingredients[ingk]}
            </li>);
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your Burger with ingredients bellow</p>
                {ingredients}
                <p><strong>Total price {this.props.price.toFixed(2)}</strong></p>
                <Button type={"Danger"} clicked={()=>{this.props.cancel()}}>CANCEL</Button>
                <Button type={"Success"} clicked={()=>{this.props.continue()}}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;