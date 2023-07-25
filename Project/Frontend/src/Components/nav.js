import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li className="nav"><Link to="/home"><img src="/pic1.png" height="1px" width="30px"></img></Link></li>
        <li className='title'><b>KiFu</b></li>
        <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/donate">Donate</Link></li>
        <li> <Link to="/fundraise">Fundraise</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
       

  );
};

export default Navbar;
