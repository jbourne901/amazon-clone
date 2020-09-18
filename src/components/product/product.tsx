import React from 'react';
import './product.css';
import useStateValue from '../state-provider/state-provider';
import IProduct from "../../types/product";
import {actionTypes} from "../../state/types";
import Rating from "../rating";

interface IProps {
  product: IProduct;
}

const Product = (props: IProps) => {

  const {state, dispatch} = useStateValue();

  const addToBasket = () => {
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        item: {product: props.product, count: 1}
      });
  };
  
  
  return (
    <div className="product">
      <div className="product-info">
        <p>{props.product.title}</p>
        <p className="product-price">
          <small>$</small> <strong>{props.product.price}</strong>
        </p>
        <div className="product-rating">
          <Rating rating={props.product.rating} />
        </div>
      </div>
      <img src={props.product.image} 
          className="product-img"
          alt=""
      />

      <button 
        className="product-button"
        onClick = {() => addToBasket()}
      >
          Add to Basket
      </button>
    </div>
  );
}

export default Product;
