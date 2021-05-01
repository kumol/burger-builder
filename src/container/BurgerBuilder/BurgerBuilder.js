import React,{ Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
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
        totalPrice:5,
        purchable:false,
        purchasing:false,
        isLoading:false
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
        this.updatePurchase(upDatedIngredients);
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
        this.updatePurchase(updatedIngredients);
    }
    updatePurchase=(ingredients)=>{
        const sum = Object.keys(ingredients)
            .map(k=>{
                return ingredients[k];
            }).reduce((sum,el)=>{
                return sum+=el;
            },0);
        
        //console.log(sum);
        this.setState({purchable:sum>0});
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () => {
        this.setState({
            isLoading:true,
        })
        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:"Kumol Bhoumik",
                address:{
                    house:"455",
                    city:"Dhaka",
                    country:"Bangladesh"
                },
                deliveryMethod:"Fastest"
            }
        }

        axios.post("/orders.json",order).then(response=>{
            console.log(response);
            this.setState({
                isLoading:false,
                purchasing:false
            })
        }).catch(err=>{
            this.setState({
                isLoading:false,
            })
        });
        //alert("You Continuing purchase");
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = <OrderSummary 
                                price={this.state.totalPrice}
                                cancel={this.purchaseCancelHandler}
                                continue={this.purchaseContinueHandler}
                                ingredients={this.state.ingredients}/>

        if(this.state.isLoading){
            orderSummary = <Spinner/>
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls purchaseHandler={this.purchaseHandler}
                    purchable={this.state.purchable}
                    disable={disabledInfo}
                    ingredientsAdd={this.addIngredientsHandler}
                    ingredientsRemove={this.removeIngredients}
                    price={this.state.totalPrice} ></BuildControls>
            </Aux>
        );
    };
}

export default BurgerBuilder;