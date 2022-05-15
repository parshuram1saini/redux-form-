import React,{useState} from 'react';
import Formconstant from './constant/constant';
// import initialstate from './constant/Initialstate';
import { useDispatch } from 'react-redux';
import { Actionsubmit } from './redux/Action';
import './Formview.css'

function Formview() {
  const dispatch= useDispatch(); /* dispatch the data */

  // const [formdata, setFormdata]=useState({...initialstate});
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const formdata= {fname,lname,email,password}
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(Actionsubmit(formdata))
    setFname("")
    setLname("")
    setEmail("");
    setPassword("")
  }
  return (
    <div>
        <form className="ui form" onSubmit={handleSubmit}>
  <div className="field">
    <label>{Formconstant.fname}</label>
    <input type="text" name="first-name" required
    value={fname}
    onChange={(e)=>setFname(e.target.value)} 
    placeholder="First Name"/>
  </div>
  <div className='ui divider'></div>
  <div className="field">
    <label>{Formconstant.lname}</label>
    <input type="text" name="last-name" required
    value={lname}
    onChange={(e)=>setLname(e.target.value)} 
    placeholder="Last Name"/>
  </div>
  <div className='ui divider'></div>
  <div className="field">
    <label>{Formconstant.email}</label>
    <input type="email" name="email" required
    value={email}
     onChange={(e)=>setEmail(e.target.value)}
    placeholder="email"/>
  </div>
  <div className='ui divider'></div>
  <div className="field">
    <label>{Formconstant.password}</label>
    <input type="password" name="password" required
    value={password}
     onChange={(e)=>setPassword(e.target.value)}
    placeholder="password"/>
  </div>
  <div className='ui divider'></div>
  <button className="ui button" type="submit">Submit</button>
  </form>
    </div>
  )
}

export default Formview;