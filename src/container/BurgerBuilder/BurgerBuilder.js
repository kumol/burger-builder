import React,{ Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";
import * as actionTypes from "../../store/action";

class BurgerBuilder extends Component{
    state = {
        // ingredients:{
        //     salad:0,
        //     bacon:0,
        //     meat:0,
        //     cheese:0
        // },
        totalPrice:5,
        
        purchasing:false,
        isLoading:false
    }
    componentDidMount = ()=>{
        this.loadIngreadinets();
    }
    // addIngredientsHandler =(type)=>{
    //     const oldCount = this.state.ingredients[type];
    //     const upDateCount = oldCount+1;
    //     const upDatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     upDatedIngredients[type] = upDateCount;
    //     const oldPrice = this.state.totalPrice;
    //     const updatePrice = oldPrice + ingredientsPrice[type];
    //     this.setState({totalPrice: updatePrice,ingredients: upDatedIngredients});
    //     this.updatePurchase(upDatedIngredients);
    // }

    // removeIngredients = (type) => {
    //     const currentCount = this.state.ingredients[type];
    //     const updatedCount = currentCount>0?currentCount-1:0
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     const currentPrice = this.state.totalPrice;
    //     const updatedPrice = currentCount > 0 ? currentPrice - ingredientsPrice[type]: currentPrice;
    //     this.setState({totalPrice:updatedPrice, ingredients: updatedIngredients});
    //     this.updatePurchase(updatedIngredients);
    // }
    

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }
    loadIngreadinets = ()=>{
        // axios.get("https://react-burger-845c2-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json")
        //     .then(response=>{
        //         this.setState({ingredients:response.data});
        //     }).catch(error=>{
        //         console.log(error);
        //     });
    }
    purchaseContinueHandler = () => {

        // this.setState({
        //     isLoading:true,
        // })

        
        // const queryParams = []
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push(encodeURIComponent("price")+"="+encodeURIComponent(this.state.totalPrice));
        // const queryString = queryParams.join("&");
        this.props.history.push({
            pathname:"/checkout/"
        });
        this.setState({
            isLoading:false,
            purchasing:false
        })
        //alert("You Continuing purchase");
    }
    render(){
        const disabledInfo = {
            ...this.props.ing
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary,burger= <Spinner/>

        if(this.props.ing){
            burger = <Aux>
                <Burger ingredients={this.props.ing}></Burger>
                    <BuildControls purchaseHandler={this.purchaseHandler}
                        purchable={this.props.purchable}
                        disable={disabledInfo}
                        ingredientsAdd={this.props.onIngredientToAdd}
                        ingredientsRemove={this.props.onIngredientToRemove}
                        price={this.props.price} ></BuildControls>
            </Aux>
            orderSummary = <OrderSummary 
                            price={this.props.price}
                            cancel={this.purchaseCancelHandler}
                            continue={this.purchaseContinueHandler}
                            ingredients={this.props.ing}/>
        }

        if(this.state.isLoading){
            orderSummary = <Spinner/>
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    };
}

const mapStateToProps = (state)=> {
    return {
        ing:state.ingredients,
        price: state.totalPrice,
        purchable: state.purchable
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIngredientToAdd : (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientToRemove : (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));