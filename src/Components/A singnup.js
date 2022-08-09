import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import {auth} from './../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

 function Signup() {
   const[userData,SetuserData]=useState({
     email:'',
     password:'',
   })
   const {email,password}=userData
   const changeHandler=(e)=>
   {
    SetuserData({...userData,[e.target.name]:e.target.value})
   }
   const signup=(e)=>
   {
     e.preventDefault()
     let res = createUserWithEmailAndPassword(auth,email,password)
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
     alert("data sent successfully")
   }
  return (<>
      <h2 className='text-center'>Signup Form</h2>
      <center>
      <div className='p-3' >
        <Box>
    <form >
      <TextField  id="outlined-basic" label="Email" type="email" name='email' value={email} variant="outlined" style={{width:"40%"}} onChange={changeHandler} /><br></br><br></br>
      <TextField  id="outlined-basic" label="Password" type="password" name='password' value={password} variant="outlined" style={{width:"40%"}} onChange={changeHandler}/><br></br><br></br>
      <Button onClick={signup} className='w-25' variant="contained">CREATE ACCOUNT</Button><br></br><br></br>
    <output>Already have an Account?<Link style={{marginRight:"60px"}} to="/signin">SignIn</Link></output>
    </form>
    </Box>
    </div>
    </center>
    </>);
}

export default Signup