import './signup.css';
import {Link} from 'react-router-dom';
import React from 'react';

 function SignUp(){
    return( 
        <div className="center">
        <h1>SignUp</h1>
        <form method="post">

        <div className="txt_field">
        <input type="text" name="name" required></input>
        <span></span>
        <label>Name</label>
        </div>
        <div className="txt_field">
        <input type="tel" required ></input>
        <span></span>
        <label>Mobile Number</label>
        </div>
        <div className="txt_field">
        <input type="email" name="e-mail" required></input>
        <span></span>
        <label>Your Email</label>
        </div>
        <div className="txt_field">
        <input type="password" required ></input>
        <span></span>
        <label>Password</label>
        </div>
        <div className="txt_field">
        <input type="password" required ></input>
        <span></span>
        <label>Confirm Password</label>
        </div>

      <div className="suhail">
       <input type="submit" value="Signup"></input>
      </div>

      <div className="signup_link">
      Already Registered ?<Link to="/">Login</Link>
      </div>
      </form>
        </div>
    );
    }
 export default SignUp;