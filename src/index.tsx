import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import "./index.css";
import {StateProvider} from "./components/state-provider/state-provider";
import reducer from "./state/reducer";
import {initialState} from "./state/types";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer={reducer}>
      <App />
    </StateProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

