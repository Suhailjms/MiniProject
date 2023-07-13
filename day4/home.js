import React from 'react';
import Layout from './Layout';
import './home.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
     <div className='whole'>
      <div className="hero-image">
        {/* Your hero image component or code here */}
      </div>
      <div className="content">
        <h2>Welcome to our KiFu Platform!</h2>
        <p>Giving is not just about making a donation. It is about making a difference.</p>
        <button className="donate-btn"><Link to="/donate" className='text'>Donate Now</Link></button>
        <button className="fundraise-btn"><Link to="/fundraise"className='text'>Fundraise for a Cause</Link></button>
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;
