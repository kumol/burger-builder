import React,{Component} from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
    state={
        orderForm:{
            name:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Your name"
                },
                value:""
            },
            email:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Your email"
                },
                value:""
            },
            street:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Street"
                },
                value:""
            },
            postCode:{
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Post Code"
                },
                value:""
            },
            deliveryMethod:{
                elementType:"select",
                elementConfig:{
                    option:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]
                },
                value:"fastest"
            }
        },
        isLoading:false
    }
    confirmOrder=()=>{
        this.setState({
            isLoading:true
        })
        const order = {
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:{
                name:this.state.name,
                email:this.state.email,
                address:{
                    postCode:this.state.postCode,
                    city:"Dhaka",
                    country:"Bangladesh"
                },
                deliveryMethod:this.state.deliveryMethod
            }
        }
        console.log(order);
        axios.post("/orders.json",order).then(response=>{
            this.setState({
                isLoading:false
            });
        }).catch(err=>{
            this.setState({
                isLoading:false,
            });
        });
        //this.props.history.push("/");
    }
    inputValueChanger=(event,id)=>{
        console.log(event.target.value);
        console.log(id);
        const inputField = this.state.orderForm[id];
        const updateOrder = this.state.orderForm;
        inputField["value"] = event.target.value;
        updateOrder[id] = inputField;
        this.setState({
            orderForm:updateOrder
        });
    }
    render(){
        const orderForm = [];
        for(let key in this.state.orderForm){
            orderForm.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
        const form = this.state.isLoading ? <Spinner/>:<form>
            {
                orderForm.map(form=>{
                    return (
                        <Input key={form.id}
                            elementType={form.config.elementType} 
                            elementConfig={form.config.elementConfig}
                            value={form.value}
                            onChange={(e)=>{this.inputValueChanger(e,form.id)}}/>
                    )               
                })
            }
            {/* <Input elementType={this.state.elementType} elementConfig={this.state.elementConfig} value={this.state.value} />
            <Input  inputtype="input"  type="email" name="email" placeholder="Enter email"/>
            <Input  inputtype="input" type="text" name="street" placeholder="Enter street"/>
            <Input  inputtype="input" type="text" name="postcode" placeholder="Enter postcode"/> */}
            <Button type="Success" clicked={this.confirmOrder}> Order  </Button>
        </form>;
        return(
            <div className={classes.ContactData}>
                <p>
                    Enter form data
                </p>
                {form}
            </div>

        )
    }
}

export default ContactData;