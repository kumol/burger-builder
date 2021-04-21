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
        {
            controls.map(con=>{
                return <BuildControl key={con.label} label={con.label}/>
            })
        }
    </div>
)

export default BuildControls;