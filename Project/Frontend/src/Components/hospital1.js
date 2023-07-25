import './hospital1.css';
// import {Link} from 'react-router-dom';
// import Layout from './Layout';
import {useNavigate,useLocation} from 'react-router-dom';
import {useState} from 'react';
const Hospital1Page=()=>{
 
       const[story,SetStory] = useState('');
       const navigate = useNavigate();
       const location = useLocation(); //to call the values from the previous form 
       const hname = location.state.hname; // to call the values from the previous form
       const amount = location.state.amount;
       const relation = location.state.relation;
    //    const age = location.state.age;
       const locations = location.state.locations;

       const handleChangeStory=(e)=>{
        SetStory(e.target.value);
       }
       const handleSubmit=(e)=>{
        e.preventDefault();

        navigate("/account",{
            state: {
                amount,
                relation,
                locations,
                hname,
                story
        },
    });
       };


    return(

        <div className="hospital1">
        <form onSubmit={handleSubmit}>
        <div className='text1'>
        <p>Explain the Case</p>
        <textarea rows="12" cols="70" required onChange={handleChangeStory}></textarea>
        </div>
        <input type="file"  accept="image/*"  id="file">
        </input>
        <div className="file_label">
        <label for="file">Upload a Photo or Document</label>
        </div>
        <div className="Next_button">
       <button type="submit" >&rArr;</button>
        </div>

        </form>
        </div>
    );
}
export default Hospital1Page;