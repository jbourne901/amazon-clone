import React from 'react';
import './checkout-product.css';
import {Search, ShoppingBasket} from "@material-ui/icons";
import {IBasketItem} from "../../types/basket";
import Rating from "../rating";

interface IProps {
  item: IBasketItem;
  onRemove: () => void;
}

const CheckoutProduct = (props: IProps) => {
  const item = props.item;
  return (
    <div className="checkout-product">
      <img src={item.product.image} 
        alt="" 
        className="checkout-product-image"
      />
      <div className="checkout-product-info">
        <p className="checkout-product-title">
          {item.product.title}
        </p>
        <p className="checkout-product-price">
          <small>$</small> <strong>{item.product.price}</strong>
        </p>
        <div className="checkout-product-rating">
           <Rating rating = {item.product.rating} />
        </div>
        <button   
          className="checkout-product-removebutton"
          onClick = { () => props.onRemove() }
        >
            Remove from Basket
        </button>
      </div>
    </div>
  );
}
export default CheckoutProduct;

