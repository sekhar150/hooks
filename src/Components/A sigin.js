import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import {auth} from './../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

 function Signin() {
   const[userData,SetuserData]=useState({
     email:'',
     password:'',
   })
   const {email,password}=userData
   const changeHandler=(e)=>
   {
    SetuserData({...userData,[e.target.name]:e.target.value})
   }
   const signin=(e)=>
   {
     e.preventDefault()
     let res = signInWithEmailAndPassword(auth,email,password)
     .then( data => console.log(data))
     .catch(err => console.log(err))

     console.log(res)
     if(res)
     {
      SetuserData({
        email:'',
        password:'',
      })
     }
     alert("Signin successfully")
   }
  return (<>
      <h2 className='text-center'>Signin Form</h2>
      <center>
      <div className='p-3' >
        <Box>
    <form >
      <TextField  id="outlined-basic" label="Email" type="email" name='email' value={email} variant="outlined" style={{width:"40%"}} onChange={changeHandler} /><br></br><br></br>
      <TextField  id="outlined-basic" label="Password" type="password" name='password' value={password} variant="outlined" style={{width:"40%"}} onChange={changeHandler}/><br></br><br></br>
      <Button onClick={signin} className='w-25' variant="contained">SIGIN</Button><br></br><br></br>
    <output>Don't have an Account?<Link style={{marginRight:"60px"}} to="/signin">Signup</Link></output>
    </form>
    </Box>
    </div>
    </center>
    </>);
}

export default Signin;