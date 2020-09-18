import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './login.css';
import {auth} from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const onSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {    
    e.preventDefault();    
    if(!email || !password) {
      return;
    }
    try {

      const res = await auth.signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      if(res && user) {
        history.push("/");
      } else {
        console.error("Unknown error")
      }
    } catch(err) {
      console.error(err);
    }
  };

  const onRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!email || !password) {
      return;
    }
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(`account created `)
      console.dir(res)
      const user = auth.currentUser;
      console.dir(user)
      if(res && user) {
        history.push("/");
      } else {
        console.error("Unknown error")
      }
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          alt="" 
          className="login-img"
        />
      </Link>
      <div className="login-container">
        <h1 className="login-signinlabel">Sign In</h1>
        <form>
          <h5 className="login-fieldlabel">E-mail</h5>
          <input value={email}
            onChange = {(e) => setEmail(e.target.value)}
            className="login-input" 
            type="text"
          />
          <h5 className="login-fieldlabel">Password</h5>
          <input value={password}
            onChange = {(e) => setPassword(e.target.value)}
            className="login-input"
            type="password"
          />
          <button 
            onClick = {(e: React.MouseEvent<HTMLButtonElement>) => onSignIn(e)}
            className="login-signinbutton"
          >
              Sign In
          </button>
        </form>
        <p className="login-para">
          By signing-in you agree to AMAZON FAKE CLONE's Conditions
          of Use & Sale. Please see our Privacy Notice,
          our Cookie Notice and our Interest-Base Ads Notice.
        </p>
        <button 
          onClick = {(e: React.MouseEvent<HTMLButtonElement>) => onRegister(e)}
          className="login-registerbutton"
        >
          Create your Amazon account
        </button>
      </div>
      
    </div>
  );
}

export default Login;

