import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import './education.css';

const EducationPage = () => {
  return (
    <Layout>
    <div className="food">
     <h1><center>Education Fundraising campaign</center></h1>
     <form>
         <div className="foodform">
             <div className="txt_field5">
             <input type="number" min ="5000" max="500000" step="1000" required></input>
 <span></span>
 <label>How much do you want to raise (in Rupees)?</label>
 </div>
 <div className="txt_field5">
 <p>For whom are you raising funds?</p>
 <select>
 <option value="self">MySelf</option>
 <option value="Mother">Mother</option>
 <option value="Father">Father</option>
 <option value="Son">Son</option>
 <option value="Daughter">Daughter</option>
 <option value="Friend">Friend</option>
 <option value="Relative">Relative</option>
 <option value="Other">Other</option>
 </select>
 </div>
 <div className="txt_field5">
 <p>Age</p>
 <select>
 <option value="age1">Below 5 years</option>
 <option value="age2">6-10 years</option>
 <option value="age3">11-17 years</option>
 <option value="age4">18-30 years</option>
 <option value="age5">31-40 years</option>
 <option value="age6">Above 40 years</option>
 </select>
 </div>
 <div className="txt_field5">
 <input type="text" required ></input>
 <span></span>
 <label>Institute Name</label>
 </div>
 <div className="txt_field5">
 <input type="text" required ></input>
 <span></span>
 <label>Institute Location</label>
 </div>
 <div className="txt_field5">
 <input type="date" required ></input>
 <span></span>
 <label>Start Date</label>
 </div>
 <div className="txt_field5">
 <input type="date" required ></input>
 <span></span>
 <label>End Date</label>
 </div>
<div className="foodbutton">

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

export default EducationPage;
