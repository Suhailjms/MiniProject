import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';

function SignUp() {
  const signupstyles = {
    width: '30%',
    height: '50px',
    border: '1px solid',
    transform: 'translate(110%, 30%)',
    background: '#2691d9',
    borderRadius: '25px',
    fontSize: '18px',
    color: '#e9f4fb',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     user_name: name,
  //     user_email: email,
  //     user_mob: mobile,
  //     user_pass: password,
  //   };

  //   try {
  //     await axios.post('http://127.0.0.1:8080/save', data);
  //     navigate('/home');
  //     console.log(data);
  //     toast.success('SignUp successful!', {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 3000,
  //     });
  //   } catch (error) {
  //     // Handle error (if any)
  //     toast.error('SignUp Not Successful!', {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 3000,
  //     });
  //   }
  // };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try { 
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/register', {
        name :name,
        email:email,
        mobilenumber:mobile,
        password:password,
      });

      if (response.status === 200) {
        // setPopupMessage('Registered Successfully');
        navigate('/home');
        setName('');
        setMobile('');
        setPassword('');
        setEmail('');
        toast.success('SignUp successful!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
              });
      }
    } catch (error) {
      console.error('Error: ',error);
      toast.error('SignUp Not Successful!', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
    }

  };
  return (
    <div className="center">
      <h1>SignUp</h1>
      <form method="post" onSubmit={handleSignUp}>
        <div className="txt_field">
          <input type="text" name="Name" autoComplete='off' value={name} required onChange={handleChangeName} />
          <span></span>
          <label>Name</label>
        </div>
        <div className="txt_field">
          <input type="email" name="Email" autoComplete='off'value={email} required onChange={handleChangeEmail} />
          <span></span>
          <label>Your Email</label>
        </div>
        <div className="txt_field">
          <input type="tel" name="phone" autoComplete='off' value={mobile} required onChange={handleChangeMobile} />
          <span></span>
          <label>Mobile Number</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="pass"
            value={password}
            required
            onChange={handleChangePassword}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="suhail">
          <button type="submit" style={signupstyles}>
            SignUp
          </button>
        </div>
        <div className="signup_link">
          Already Registered ?<Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
