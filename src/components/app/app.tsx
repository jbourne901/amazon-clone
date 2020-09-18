import React, {useEffect} from 'react';
import './app.css';
import Header from "../header";
import Home from "../home";
import Checkout from "../checkout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../login";
import {auth} from "../../firebase";
import { actionTypes } from '../../state/types';
import useStateValue from '../state-provider/state-provider';

const App = () => {
  const {dispatch} = useStateValue();
  useEffect( () => {
    auth.onAuthStateChanged( user => {
      if(user) {
        dispatch({type: actionTypes.SET_USER, user});
      } else {
        dispatch({type: actionTypes.SET_USER});
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">            
            <Home />
          </Route>
        </Switch>                
      </div>    
    </BrowserRouter>    
  );
}

export default App;
