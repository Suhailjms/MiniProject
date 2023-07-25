import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import './donation.css';

const DonationPage =()=>{
    return(
       <Layout>
        <div className='donate1'>
        <h1><center>Donation</center></h1>
        <form method="post2">
        <div className='formcss'>
        <div className="txt_field2">
        <input type="email" name="e-mail" required></input>
        <span></span>
        <label>Your Email</label>
        </div>
        <div className="txt_field2">
        <input type="text" required ></input>
        <span></span>
        <label>Name</label>
        </div>
        <div className="txt_field2">
        <input type="number" min ="50" max="100000"step ="50" required ></input>
        <span></span>
        <label>Donation Amount(in Rupees)</label>
        </div>
      <div className="donatebutton">

      <Link to="/home">
      <input type="submit" value="Donate" />
    </Link>
      </div>
          </div>

      </form>
        </div>
    </Layout>
        );
};

export default DonationPage;