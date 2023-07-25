import React from "react";
// import Layout from "./Layout";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './hospital.css'

const HospitalPage=()=>{

      const[amount,SetAmount] = useState(''); // use state is used to set the value whenever it changes
      const[relation,SetRelation] = useState('');
    //   const[age,SetAge] = useState('');
      const[hname,SetHname] = useState('');
      const[locations,SetLocations] = useState('');

      const navigate = useNavigate();

    const handleChangeAmount=(e)=>{  //amount will be set to SetAmount when onclick function happens 
        SetAmount(e.target.value); // the value will be stored in the amount e is parameter target is the current value stored in the field value will be stored in the amount variable
    }
    const handleChangeRelation=(e)=>{
        SetRelation(e.target.value);
    }
    const handleChangeLocation=(e)=>{
        SetLocations(e.target.value);
    }
    const handleChangeHname=(e)=>{
        SetHname(e.target.value);
    }
 
    const handleSubmit=(e)=>{
        e.preventDefault(); // the values will be deleted after the refresh
        navigate("/hospital1",{
            state: {    // used to store the value and pass to the next page
                amount,
                relation,
                hname,
                locations
            },
        });
    }

    return(

           <div className="hospital">
            <h1><center>Fundraising campaign</center></h1>
            <form onSubmit={handleSubmit}>
                <div className="hospitalform">
        <div className="txt_field3">
        <input type="text" required onChange={handleChangeHname} value={hname}></input>
        <span></span>
        <label>Name of the Fundraiser</label>
        </div>
                    <div className="txt_field3">
                    <input type="number" name="amount" min ="5000" max="500000" step="1000" required onChange={handleChangeAmount} value={amount}></input>
        <span></span>
        <label>How much do you want to raise (in Rupees)?</label>
        </div>
        <div className="txt_field3">
        <p>Fundraising Category</p>
        <select onChange={handleChangeRelation} type="text" value={relation}>
        <option value=""></option>
        <option value="self">Self</option>
        <option value="Hospital">Hospital</option>
        <option value="Pet">Pet</option>
        <option value="Education">Education</option>
        <option value="Food">Food</option>
        <option value="Memorial">Memorial</option>
        <option value="Other">Other</option>
        </select>
        </div>
        <div className="txt_field3">
        <input type="text" required onChange={handleChangeLocation} value={locations}></input>
        <span></span>
        <label>Location</label>
        </div>
      <div className="hospitalbutton">

      <button type="submit" >&rArr;</button>
      </div> 
                </div>
            </form>
           </div>

    );
};
export default HospitalPage;