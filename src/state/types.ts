import IBasket from "../types/basket";
import {IBasketItem} from "../types/basket";
import IUser from "../types/user";


export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    SET_USER: "SET_USER"
};

export interface IAction {
    type: string;
    item?: IBasketItem;
    user?: IUser;
}
export interface IState {
    basket: IBasket;
    user?: IUser;
}
export const initialState: IState = {
    basket: []
};

export type IReducer = (state: IState, action: IAction) => IState;

export interface IReducerDispatch {
    state: IState,
    dispatch: React.Dispatch<IAction>
};

