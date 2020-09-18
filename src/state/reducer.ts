import {IAction, IState, IReducer, actionTypes} from "./types";
import {IBasketItem} from "../types/basket";

const reducer: IReducer = (state: IState, action: IAction) => {
    let nextState: IState = state;
    switch(action.type) {
        case actionTypes.ADD_TO_BASKET:         
            if(action.item) {
                const nextBasket = [...state.basket];
                nextBasket.push(action.item);
                nextState = {...state, basket: nextBasket};
                console.log(`ADD_TO_BASKET nextstate = `)
                console.dir(nextState)
            }
            break;
        case actionTypes.REMOVE_FROM_BASKET:
            if(action.item) {
                const nextBasket = state.basket.filter( (b: IBasketItem) => b.product.id!==action.item?.product.id)
                nextState = {...state, basket: nextBasket};
                console.log(`REMOVE_FROM_BASKET nextstate = `)
                console.dir(nextState)
            }
            break;
        case actionTypes.SET_USER:
            nextState = {...state, user: action.user};
            console.log(`SET_USER nextstate = `)
            console.dir(nextState)
            break;
    }
    return nextState;
};

export default reducer;
