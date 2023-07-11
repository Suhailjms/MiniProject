import './login.css';
import {Link} from 'react-router-dom';
import React from 'react';
function Login(){

    return( 
        <div className="center1">
        <h1> Login</h1>
        <form method="post1">
        <div className="txt_field1">
        <input type="email" name="e-mail" required></input>
        <span></span>
        <label>Your Email</label>
        </div>
        <div className="txt_field1">
        <input type="password" required ></input>
        <span></span>
        <label>Password</label>
        </div>
        <div className="pass1">Forgot Password?</div>
        <div className="button">

      <input type="submit" value="Login"></input>
        </div>
      <div className="signup_link1">
      Not a member? <Link to="/signup">SignUp</Link>
      </div>
      </form>
        </div>
    );
    }
 export default Login;

