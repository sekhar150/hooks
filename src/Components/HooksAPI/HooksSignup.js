import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export default (props) =>
 
 {
   var[userData,setStateuserData]=useState({
       name:'',
       email:'',
       phone:'',
       txtConfirmation:''
   })
    
   var{name,email,phone,txtConfirmation}=userData
  let formDatahandling=(e)=>
  {
    setStateuserData({...userData,[e.target.name]:e.target.value})
  }
  let submitHandler=(e)=>
  {
    e.preventDefault();
    var FormData=
    {
      name:`${userData.name}`,
      email:`${userData.email}`,
      phone:`${userData.phone}`

    }
    // alert(JSON.stringify(FormData))
    // axios.post(url,fordata)
    // .then(()=>window.alert("....CREATED...."))
    // .catch(()=>window.alert("....ERROR...."))

    /*axios.post(url,FormData)
    .then(()=>this.setState({txtConfirmation:'ACCOUNT CREATED'}))
    .catch(()=>this.setState({txtConfirmation:'ACCOUNT FAILED'}))*/

    axios.post(url,FormData)
    .then(() =>{
     window.alert("....CREATED....") 
     props.history.push('/hooksuser')
    })
  }
  
    return (
      <div className='container p-5'>

        <h2 className='py-3 text-center'>User Registration</h2>
        <div className='container w-50'>
        <form onSubmit={submitHandler.bind(this)}> 
          <div class="mb-3">
          <label class="form-label">NAME</label>
          <input type="text" class="form-control" 
          value={name} name="name"
          onChange={formDatahandling.bind(this)} />
        </div>

        <div class="mb-3">
          <label class="form-label">EMAIL</label>
          <input type="email" class="form-control"  
          value={email} name="email"
          onChange={formDatahandling.bind(this)}/>
        </div>

        <div class="mb-3">
          <label class="form-label">PHONE NUMBER</label>
          <input type="number" class="form-control" 
          value={phone} name="phone"
          onChange={formDatahandling.bind(this)} />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
          <p className='text-primary'>{txtConfirmation}</p>
        </div>
        </form>
        </div>
      </div>
    )
  }

