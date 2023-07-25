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
  
<Link to="/hospital">
<img src="/pic5.png"></img>
</Link>

<Link to="/hospital">
<img src="/pic7.png"></img>
</Link>

<Link to = "/hospital">
<img src='/pic8.png'></img>
</Link>

<Link to="/hospital">

<img src="/pic6.png"></img>
</Link>
  </div>
</div>
    </Layout>
  );
};

export default FundraisePage;