import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import './donate.css';

const DonatePage = () => {
  return (
    <Layout>
      <div className="H_Page"> 
<div className="Card">
<h2>
"Akash suffering from Asthuma"
</h2>
<p>
We need your help to make a difference in the life of a courageous child fighting a life-threatening disease. Currently in a hospital bed, this young warrior's battle is far from over. Your donations can provide the crucial funds needed for their treatment and bring hope to their family.
</p>
<img src="/pic4.jpg" height="300px" width="400px"></img>
<Link to = "/donation">
<button className="fund_button" type="submit">Donate</button>
</Link>
</div>
</div>
    </Layout>
  );
};

export default DonatePage;
