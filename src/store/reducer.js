import * as actionTypes from "./action";

const initialState = {
    totalPrice:4,
    initialPrice:4,
    ingredients:{
        salad:0,
        bacon:0,
        meat:0,
        cheese:0
    },
    purchable:false
}


const ingredientsPrice = {
    salad:0.4,
    bacon:1,
    cheese:0.5,
    meat:1.5
}

// const updatePurchase=(ingredients,type)=>{
//     let sum = Object.keys(ingredients)
//         .map(k=>{
//             return ingredients[k];
//         }).reduce((sum,el)=>{
//             return sum+=el;
//         },0);
//     sum = type === 1 ? sum + 1 : sum - 1;
//     //console.log(sum);
//     console.log(sum);

//     initialState.purchable = sum > 0;
//     console.log(sum>0);
// }

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice + ingredientsPrice[action.ingredientName],
                purchable : true
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice - ingredientsPrice[action.ingredientName],
                purchable : state.totalPrice - ingredientsPrice[action.ingredientName] > state.initialPrice
            }
        default:
            return state;
    }
}

export default reducer;