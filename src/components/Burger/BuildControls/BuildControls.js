import classes from './BuildControls.module.css';
import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
const controls=[
    {label:"Cheese",type:"cheese"},
    {label:"Bacon",type:"bacon"},
    {label:"Salad",type:"salad"},
    {label:"Meat",type:"meat"}
]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price <strong>{props.price}</strong></p>
        {
            controls.map(con=>{
                return <BuildControl 
                key={con.label}
                label={con.label}
                remove={()=>{props.ingredientsRemove(con.type)}}
                added={()=>{props.ingredientsAdd(con.type)}}
                disable={props.disable[con.type]} />
            })
        }
        <button onClick={()=>{props.purchaseHandler()}}
            className={classes.OrderButton} disabled={!props.purchable}>Order Now</button>
    </div>
)

export default BuildControls;