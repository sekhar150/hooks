import axios from 'axios'
import React, { useState,useEffect } from 'react'



export default () =>
 
 {
   var[user,setuser]=useState({
       name:'',
       email:'',
       phone:'',
       address:'',
       message:''
   })
    
   let name,value;
  const getUserData=(e)=>
  {
    name=e.target.name;
    value=e.target.value;

    setuser({...user,[name]:value})
  }
 
    const postData=async(e)=>
    {
        e.preventDefault()

        const{name,email,phone,address,message}=user

        if(name && email && phone && address && message)
        {
            const res=await fetch('https://reactcontactform-85843-default-rtdb.firebaseio.com/reactcontactform.json',
       {
           method:"POST",
           headers:{
               "Content-type":"application/json"
           },
           body:JSON.stringify({
            name,
            email,
            phone,
            address,
            message, 
           }),
       }
       )
       if(res)
  {
    setuser({
        name:'',
       email:'',
       phone:'',
       address:'',
       message:'',
    }) 
      alert("Data Stored Succesfully")
   }
        }
        else
        {
           alert("Please Fill All The Data")
        }
    }
    return (
      <div className='container p-5'>

        <h2 className='py-3 text-center'>Contact Us</h2>
        <div className='container w-50'>
        <form method='POST'> 
          <div class="mb-3">
          <label class="form-label">NAME</label>
          <input type="text" class="form-control" 
          value={user.name} name="name"
          onChange={getUserData}
          autoComplete="off"
          required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">EMAIL</label>
          <input type="email" class="form-control"  
          value={user.email} name="email"
          onChange={getUserData}
          autoComplete="off"
          required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">PHONE NUMBER</label>
          <input type="number" class="form-control" 
          value={user.phone} name="phone"
          onChange={getUserData}
          autoComplete="off"
          required
           />
        </div>
        <div class="mb-3">
          <label class="form-label">ADDRESS</label>
          <input type="text" class="form-control" 
          value={user.address} name="address"
          onChange={getUserData}
          autoComplete="off"
          required />
        </div>
        <div class="mb-3">
          <label class="form-label">MESSAGE</label>
          <input type="text" class="form-control" 
          value={user.message} name="message"
          onChange={getUserData}
          autoComplete="off"
          required
          />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary w-50" onClick={postData}>Submit</button>
        </div>
        </form>
        </div>
      </div>
    )
  }


