import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import './pet.css';

const PetPage = () => {
  return (
    <Layout>
      <div className="pet">
        <h1><center>Pet Fundraising Campaign</center></h1>
        <form>
          <div className="petform">
            <div className="txt_field6">
              <input type="number" name="amount" min="5000" max="500000" step="1000" required />
              <span></span>
              <label>How much do you want to raise (in Rupees)?</label>
            </div>
            <div className="txt_field6">
              <p>Pet Type</p>
              <select required>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Bird">Bird</option>
                <option value="Guinea pig">Guinea pig</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="txt_field6">
              <input type="text" name="petName" required />
              <span></span>
              <label>Pet's Name (If any)</label>
            </div>
            <div className="txt_field6">
              <input type="text" name="petCondition" required />
              <span></span>
              <label>Pet's Condition</label>
            </div>
            <div className="txt_field6">
              <input type="text" name="petRescueAdoption" required />
              <span></span>
              <label>Pet Rescue/Adoption</label>
            </div>

            <div className="petbutton">
              <Link to="/donate">
                <input type="submit" value="&rArr;" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PetPage;
