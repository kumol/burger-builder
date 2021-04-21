import React from "react";
import "./Burger.css";
import Ingredients from "./Ingredients/Ingredients";
const Burger = (props)=>{
    let mixIng = Object.keys(props.ingredients).map(igk=>{
        return [...Array(props.ingredients[igk])].map((_,i)=>{
            return <Ingredients key={igk+i} type={igk} />
        });
    }).reduce((el,ne)=>{
        return el.concat(ne);
    },[]);
    if (mixIng.length === 0) {
        mixIng = <p>please add the ing</p>
    }
    return (
        <div className ="Burger">
            <Ingredients type="bread-top"></Ingredients>
                {mixIng}
            <Ingredients type="bread-bottom"></Ingredients>
        </div>
    );
}

export default Burger;

// import React from 'react';

// import classes from './Burger.css';
// import Ingredients from "./Ingredients/Ingredients";

// const burger = ( props ) => {
//     let transformedIngredients = Object.keys( props.ingredients )
//         .map( igKey => {
//             return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
//                 return <Ingredients key={igKey + i} type={igKey} />;
//             } );
//         } )
//         .reduce((arr, el) => {
//             return arr.concat(el)
//         }, []);
//     if (transformedIngredients.length === 0) {
//         transformedIngredients = <p>Please start adding ingredients!</p>;
//     }
//     return (
//         <div className={classes.Burger}>
//             <Ingredients type="bread-top" />
//             {transformedIngredients}
//             <Ingredients type="bread-bottom" />
//         </div>
//     );
// };

// export default burger;