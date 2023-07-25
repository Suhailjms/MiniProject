import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link ,useNavigate} from 'react-router-dom';
import {useState} from 'react';
 import axios from 'axios';

import './login.css';

function Login() {
  const[email,SetEmail] = useState("");
  const[password,SetPassword] = useState("");
  const navigate = useNavigate();
  // const[details,setDetails] = useState([]);

  const handleChangeMail=(e)=>{
    const value = e.target.value;
    SetEmail(value);
  }
  // useEffect(()=>{
  //   fetchData();
  // },[]);
  // const fetchData = async()=>{
  //   try{
  //     const response = await axios.get("http://127.0.0.1:8080/get");
  //     setDetails(response.data);
  //     console.log(response);
  //   }
  //   catch(error){
  //     console.log("Error in Login:",error);
  //   }
  // }
  const handleChangePass=(e)=>{
    const value = e.target.value;
    SetPassword(value);
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });
  
      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      navigate('/home');

            toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER,
         autoClose:3000
      });
    } catch (error) {
      console.error('Error: ', error);
      toast.error('Check the Username and Password ', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
    }
  };
  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
    
  //   if(email.trim()===""||password.trim()===""){
  //     alert("Please enter both email and password");
  //     return;
  //   }
    
  //   const User = details.some(User=>User.user_email === email && User.user_pass === password);
    
  //   if(User){
  //     navigate("/home");
  //     toast.success('Login successful!', {
  //       position: toast.POSITION.TOP_CENTER,
  //        autoClose:3000
  //     });
  //   }
  //   else{
     
  //       toast.error("Check the username and password", {
  //         toastId: "loginError",
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 3000,
  //       });
  //     }
  // }

  const buttonStyles = {
    width: '30%',
    height: '50px',
    border: '1px solid',
    transform: 'translate(100%, 30%)',
    background: '#2691d9',
    borderRadius: '25px',
    fontSize: '18px',
    color: '#e9f4fb',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none'
  };

  return (
    <div className="center1">
      <h1> Login</h1>
      <form onSubmit={handleLogin}>
        <div className="txt_field1">
          <input type="email" name="e-mail"  autoComplete='off' value={email} onChange={handleChangeMail} required></input>
          <span></span>
          <label>Your Email</label>
        </div>
        <div className="txt_field1">
          <input type="password" value={password} onChange={handleChangePass} required></input>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass1">Forgot Password?</div>
        <div className="button">
  
            <button type="submit" style={buttonStyles}>
              Login
            </button>
        </div>
        <div className="signup_link1">
          Not a member? <Link to="/signup">SignUp</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
