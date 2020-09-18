import React from 'react';
import './subtotal.css';
import IBasket from "../../types/basket";
import useStateValue from "../state-provider";

const Subtotal = () => {
  const {state} = useStateValue();
  const basket = state.basket;
  console.log(`subtotal basket=`)
  console.dir(basket)
  const getBacketTotal = (basket: IBasket) => {
    let sum = 0;
    for(let item of basket) {
      sum += item.product.price*item.count;
    }
    sum = Math.round(sum*100)/100;
    return sum;
  }
  const total = getBacketTotal(basket);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>$ {total}</strong>
      </p>
      <small className="subtotal-gift">
        <input 
          type="checkbox"
          className="subtotal-gift-cb"
        /> 
        This order contains gift
      </small>

      
      <button 
          className="subtotal-button"
      > 
          Proceed to Checkout 
      </button>
    </div>
  );
}
export default Subtotal;

