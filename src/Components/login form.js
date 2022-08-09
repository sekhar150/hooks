import { width } from '@mui/system'
import React from 'react'

import {useState,useEffect} from 'react'

function Login()
{
    const initialvalues ={username:"",email:"",password:""}
    const [formValues,setformValues]=useState(initialvalues)
    const [formErrors,setformErrors]=useState({})
    const [isSubmit,setisSubmit]=useState((false))

    const handleChange=(e)=>
    {
        console.log(e.target)

        const {name,value}=e.target

        setformValues({...formValues,[name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()

        setformErrors(validate(formValues))

        setisSubmit(true)
    }
    useEffect(()=>
    {
        console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit)
      {
          console.log(formValues)
      }
    },[formErrors])
    const validate = (values)=>
    {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
      if(!values.username)
      {
          errors.username="Username Is Required"
      }
      if(!values.email)
      {
          errors.email="Email Is Required"
      }
      else if(!regex.test(values.email))
      {
        errors.email="This is not a valid email address"
      }
      if(!values.password)
      {
          errors.password="Password Is Required"
      }
      else if(values.password.length < 4)
      {
        errors.password="Password must be more than 4 characters"
      }
      else if(values.password.length > 10)
      {
        errors.password="Password cannot exceed more than 10 characters"
      }
      return errors
    }
    return(
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ?(<div className='text-success'>Signed in Succesfully</div>):(<pre>{JSON.stringify(formValues,undefined,2)}</pre>)}
            <form onSubmit={handleSubmit}>

                <h1 className='text center'>Login Form</h1>

                <div className='ui divider'></div>

                <div className='ui form'>

                <div className='mb-3'>

                    <label className="form-label">Username</label><br></br>

                    <input className='form-control w-50' type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />

                </div>
                <p className='text-danger'>{formErrors.username}</p>
                <div className='field'>

                    <label className="form-label">Emailaddress</label><br></br>

                    <input className='form-control w-50' type="email" name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>

                </div>
                <p className='text-danger'>{formErrors.email}</p>
                <div className='field'>

                    <label className="form-label">Password</label><br></br>

                    <input className='form-control w-50' type="password" name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>

                </div>
                <p className='text-danger'>{formErrors.password}</p>
                <br></br>
                 <div className='mb-3'>
                <button className='btn btn-primary w-25' type='submit'>Submit</button>
                </div>
                </div>
            </form>

        </div>
    )
}
export default Login;