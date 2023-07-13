import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import './fundraise.css';

const FundraisePage = () => {
  return (
    <Layout>
<div className="Card1">
<h2>
"Causes to create Fundraiser"
</h2>
<div className='images'>
<img src="/pic5.png"></img>
<img src="/pic6.png"></img>
<img src="/pic7.png"></img>
  </div>
</div>
    </Layout>
  );
};

export default FundraisePage;