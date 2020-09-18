import React from 'react';
import {Link} from "react-router-dom";
import './header.css';
import {Search, ShoppingBasket} from "@material-ui/icons";
import {auth} from "../../firebase";
import useStateValue from "../state-provider";

const Header = () => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch(err) {
      console.error(err)
    }  
  };

  const {state} = useStateValue();
  console.log(`Header: user=`)
  console.dir(state.user)
  let userctl;
  if(state.user) {
    userctl = (
      <div className="header-option">
        <span className="header-option-line1">
          Hello {state.user.email}
        </span>
        <span className="header-option-line2 sign-out" 
          onClick={() => handleSignOut()} >
              Sign Out
            </span>
      </div>
    );
  } else {
    userctl = (
      <Link to="/login">
          <div className="header-option">
            <span className="header-option-line1">
              Hello Guest
            </span>
            <span className="header-option-line2">
              Sign In
            </span>
        </div>
        </Link>
    );
  }
  return (
    <div className="header">
      <Link to="/" > 
        <img className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-search-input"/>
        <Search className="header-search-icon" />
      </div>

      <div className="header-nav">
        {userctl}        

        <div className="header-option">
          <span className="header-option-line1">
            Returns
          </span>
          <span className="header-option-line2">
            &Orders
          </span>          
        </div>

        <div className="header-option">
          <span className="header-option-line1">
            Your
          </span>
          <span className="header-option-line2">
            Prime
          </span>          
        </div>

        <Link to="/checkout"> 
          <div className="header-option-basket">
            <ShoppingBasket />
            <span className="header-option-line2 header-basket-count">
              {state.basket.length}
            </span>
          </div>
        </Link>        
      </div>


    </div>
  );
}

export default Header;

