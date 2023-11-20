import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'
import toast from "react-hot-toast";
import { useAuth } from '../../context/auth';



const Login = () => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [auth, setAuth] = useAuth();

        const navigate = useNavigate();
        const location= useLocation();

         // form function
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res= await axios.post('/api/v1/auth/login',{email,password});
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate(location.state || "/");
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
       <div className='form-container' style={{ backgroundImage: 'url("login.jpg")', backgroundSize: 'cover' }}>
       <div className="col-md-3 " style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , paddingBottom:'3px'}}>
          <img
            src="logo123.jpg"
            alt="logo"
            style={{ width:'70%', height:'30%'}}
          />
        </div>
   <div className='form' style={{backgroundImage: 'url("form.jpg")', backgroundSize: '140% 120%' ,borderRadius: '10px'}}>
     <div className='form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'5px' }}>
        <h1 className='title-signup'>Login</h1>
        <p>Already have an account? Login here.</p>
<form onSubmit={handleSubmit}>

  <div className="mb-4">
    <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Email' required/>
  </div>
  
  <div className="mb-4">
    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"placeholder='Password' required/>
  </div>
  <button type="submit" className="btn btn-danger">LOGIN</button>
</form>
</div>
    </div>
       </div> 
    </Layout>
  )
}

export default Login