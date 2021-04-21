import React,{ Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

const ingredientsPrice = {
    salad:0.4,
    bacon:1,
    cheese:0.5,
    meat:1.5
}
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:5
    }

    addIngredientsHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        const upDateCount = oldCount+1;
        const upDatedIngredients = {
            ...this.state.ingredients
        };
        upDatedIngredients[type] = upDateCount;
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice + ingredientsPrice[type];
        this.setState({totalPrice: updatePrice,ingredients: upDatedIngredients});
    }

    removeIngredients = (type) => {
        const currentCount = this.state.ingredients[type];
        const updatedCount = currentCount>0?currentCount-1:0
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const currentPrice = this.state.totalPrice;
        const updatedPrice = currentCount > 0 ? currentPrice - ingredientsPrice[type]: currentPrice;
        this.setState({totalPrice:updatedPrice, ingredients: updatedIngredients});
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log(disabledInfo);
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls disable={disabledInfo} ingredientsAdd={this.addIngredientsHandler} ingredientsRemove={this.removeIngredients} price={this.state.totalPrice} ></BuildControls>
            </Aux>
        );
    };
}

export default BurgerBuilder;