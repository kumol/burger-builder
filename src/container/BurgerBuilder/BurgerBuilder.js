import React,{ Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
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
        ingredients:null,
        totalPrice:5,
        purchable:false,
        purchasing:false,
        isLoading:false
    }
    componentDidMount = ()=>{
        this.loadIngreadinets();
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
    loadIngreadinets = ()=>{
        axios.get("https://react-burger-845c2-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json")
            .then(response=>{
                this.setState({ingredients:response.data});
            }).catch(error=>{
                console.log(error);
            });
    }
    purchaseContinueHandler = () => {

        // this.setState({
        //     isLoading:true,
        // })

        // const order = {
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:"Kumol Bhoumik",
        //         address:{
        //             house:"455",
        //             city:"Dhaka",
        //             country:"Bangladesh"
        //         },
        //         deliveryMethod:"Fastest"
        //     }
        // }
        const queryParams = []
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join("&");

        this.props.history.push({
            pathname:"/checkout/",
            search:"?"+queryString
        });
        this.setState({
            isLoading:false,
            purchasing:false
        })
        
        // axios.post("/orders.json",order).then(response=>{
        //     console.log(response);
        //     this.setState({
        //         isLoading:false,
        //         purchasing:false
        //     });
                
        // }).catch(err=>{
        //     this.setState({
        //         isLoading:false,
        //     })
        //});
        //alert("You Continuing purchase");
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary,burger= <Spinner/>

        if(this.state.ingredients){
            burger = <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls purchaseHandler={this.purchaseHandler}
                        purchable={this.state.purchable}
                        disable={disabledInfo}
                        ingredientsAdd={this.addIngredientsHandler}
                        ingredientsRemove={this.removeIngredients}
                        price={this.state.totalPrice} ></BuildControls>
            </Aux>
            orderSummary = <OrderSummary 
                            price={this.state.totalPrice}
                            cancel={this.purchaseCancelHandler}
                            continue={this.purchaseContinueHandler}
                            ingredients={this.state.ingredients}/>
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

export default WithErrorHandler(BurgerBuilder,axios);