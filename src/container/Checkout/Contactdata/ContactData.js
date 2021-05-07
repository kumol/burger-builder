import React,{Component} from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
    state={
        name:"",
        email:"",
        price:"",
        address:{
            street:"",
            postCode:""
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
            this.setState({
                isLoading:false
            });
        }).catch(err=>{
            this.setState({
                isLoading:false,
            });
        });
        this.props.history.push("/");
    }
    render(){
        const form = this.state.isLoading ? <Spinner/>:<form>
            <Input inputtype="input" type="text" name="name" placeholder="Enter name"/>
            <Input  inputtype="input"  type="email" name="email" placeholder="Enter email"/>
            <Input  inputtype="input" type="text" name="street" placeholder="Enter street"/>
            <Input  inputtype="input" type="text" name="postcode" placeholder="Enter postcode"/>
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