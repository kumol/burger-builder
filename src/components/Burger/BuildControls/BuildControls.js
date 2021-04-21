import classes from './BuildControls.module.css';
import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
const controls=[
    {label:"Cheese",type:"cheese"},
    {label:"Bacon",type:"bacon"},
    {label:"Salad",type:"salad"},
    {label:"Meat",type:"meat"}
]
const BuildControls = (params) => (
    <div className={classes.BuildControls}>

        <p>price {params.disable["salad"].toString()}</p>
        <p>Current Price <strong>{params.price}</strong></p>
        {
            controls.map(con=>{
                return <BuildControl key={con.label} label={con.label} remove={()=>params.ingredientsRemove(con.type)} added={()=>{params.ingredientsAdd(con.type)}} disable={params.disable[con.type]} />
            })
        }
    </div>
)

export default BuildControls;