import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import './food.css';

const FoodPage = () => {
  return (
    <Layout>
    <div className="education">
     <h1><center>Food Fundraising campaign</center></h1>
     <form>
         <div className="educationform">
             <div className="txt_field4">
             <input type="number" min ="5000" max="500000" step="1000" required></input>
 <span></span>
 <label>How much do you want to raise (in Rupees)?</label>
 </div> 
 <div className="txt_field4">
 <input type="text" required ></input>
 <span></span>
 <label>Location</label>
 </div>
 <div className="txt_field4">
 <input type="date" required ></input>
 <span></span>
 <label>Start Date</label>
 </div>
 <div className="txt_field4">
 <input type="date" required ></input>
 <span></span>
 <label>End Date</label>
 </div>
<div className="educationbutton">

<Link to="/hospital1">
<input type="submit" value="&rArr;" />
</Link>
</div> 
         </div>
     </form>
    </div>
 </Layout>
  );
};

export default FoodPage;
