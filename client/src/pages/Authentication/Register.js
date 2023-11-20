import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {toast} from "react-toastify";


const Register = () => {

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [phone, setPhone] = useState("");
        const [address, setAddress] = useState("");
        const navigate = useNavigate()

         // form function
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res= await axios.post('/api/v1/auth/register',{name,email,phone,address,password});
      if(res.data.success){
        toast.success(res.data.message)
        navigate("/login");
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
      };
    
  return (
    <Layout>
       <div className='form-container' style={{ backgroundImage: 'url("register.jpg")', backgroundSize: '87%' }}>
       <div className="col-md-3 " style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , paddingBottom:'3px'}}>
          <img
            src="logo123.jpg"
            alt="logo"
            style={{ width:'50%'}}
          />
        </div>
        <div className='form-register'style={{ backgroundImage: 'url("form.jpg")', padding:'10px 30px 10px 30px',borderRadius:'7px' }}>
        <h1 className='title-signup' style={{ fontFamily:"sans-serif" , color:"#7a2525"}} >Sign Up </h1>

<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text"  value={name}  onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Name' required/>
  </div>
  <div className="mb-3">
    <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Email' required/>
  </div>
  <div className="mb-3">
    <input type="text" value={phone}   onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone1" placeholder='Phone' required/>
  </div>
  <div className="mb-3">
    <input type="text" value={address}  onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress1" placeholder='Address'required/>
  </div>
  <div className="mb-3">
    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"placeholder='Password' required/>
  </div>
  <button type="submit" className="btn btn-danger">Submit</button>
</form>
      </div>
       </div> 
    </Layout>
  )
}

export default Register