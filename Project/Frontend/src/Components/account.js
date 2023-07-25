import './account.css';
// import Layout from './Layout';
// import {Link} from 'react-router-dom';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Accountpage=()=>{

  const accountstyles = {
    width: '30%',
    height: '50px',
    border: '1px solid',
    transform: 'translate(110%, 30%)',
    background: '#2691d9',
    borderRadius: '25px',
    fontSize: '18px',
    color: '#e9f4fb',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
  };

   const[accountName,SetAccountName] = useState('');
   const[accountNum,SetAccountNum] = useState('');
   const[ifsc,SetIfsc] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   

   const handleChangeAccountName=(e)=>{
    SetAccountName(e.target.value);
   }
   const handleChangeAccountNum=(e)=>{
    SetAccountNum(e.target.value);
   }
   const handleChangeIfsc=(e)=>{
    SetIfsc(e.target.value);
   }

   const handleSubmit=async(e)=>{
    e.preventDefault();
 
    const data = {
      // hospitalname:location.state.hname, // to call the values from the previous form
      name: location.state.hname,
      fundraise_amt: location.state.amount,
      category: location.state.relation,
      loc: location.state.locations,
      story: location.state.story,
      accountname: accountName,
      accountnum: accountNum,
      ifsc: ifsc,
    };

    try {
      await axios.post('http://127.0.0.1:8080/medfund', data);
      navigate('/donate');
      console.log(data);
      toast.success('Successfully Added!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      // Handle error (if any)
      toast.error('Check the fields', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
   };

   return(  
     <div className="ct">
     <h1>Bank Details</h1>
     <form onSubmit={handleSubmit}>
     <div className="tf">
     <input type="text" name="Name" style={{color:'black'}} required onChange={handleChangeAccountName} value={accountName}></input>
     <span></span>
     <label>Account Holder Name</label>
     </div>
     <div className='tf'>
     <input type="text" name="account_number" style={{color:'balck'}} required onChange={handleChangeAccountNum} value={accountNum}></input>
     <span></span>
     <label>Account Number</label>
     </div>
     <div className='tf'>
     <input type="text" name="ifsc" style={{color:'black'}} required onChange={handleChangeIfsc} value={ifsc}></input>
     <span></span>
     <div className='inp3'>    
     <label>IFSC Code</label>
     </div>
     </div>
     <div className="A_button">
     <button type="submit" style={accountstyles}>
            Create a Campaign
          </button>
     </div>
     </form>
     </div>
   );
}
export default Accountpage;