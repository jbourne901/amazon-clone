import React from 'react';
import './checkout.css';
import CheckoutProduct from "../checkout-product";
import Subtotal from "../subtotal";
import useStateValue from "../state-provider";
import { IBasketItem } from '../../types/basket';
import { actionTypes } from '../../state/types';

const Checkout = () => {
  const {state, dispatch} = useStateValue();
  const basketItems = [];

  const onRemoveItem = (b: IBasketItem) => {
    dispatch({type: actionTypes.REMOVE_FROM_BASKET, item: b});
  };

  if(state.basket) {
    for(let i=0; i<state.basket.length; i++) {
      const b = state.basket[i];
      basketItems.push((
        <CheckoutProduct key={i} item={b} onRemove={() => onRemoveItem(b)}/>
      ));
    }
  };
  let hello;
  if(state.user) {
    hello = (<h3 className="checkout-email">Hello, {state.user?.email}</h3>);
  }
  
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout-ad-img"
        />
        <div>
          {hello}
          <h2 className="checkout-title">            
            Your shopping Basket
          </h2>
          {basketItems}
        </div>
      </div>
      <div className="checkout-rightt">
        <Subtotal />        
      </div>
    </div>
  );
}
export default Checkout;

