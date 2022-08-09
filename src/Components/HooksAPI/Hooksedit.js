import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom';


const url=`http://localhost:3001/users`

//Global Variable
var idno;
export default (props) =>
{
    let [userData,setStateuserData]=useState({
            name:'',
            email:'',
            phone:'',
            txtConfirmation:''
        })

        let {idno}=useParams()

    let formDatahandling=(e)=>
  {
    setStateuserData({...userData,[e.target.name]:e.target.value})
  }
  useEffect( () =>{ 
    
        axios.get(`${url}/${idno}`).then( (result) => setStateuserData(result.data))
    },[])
  let submitHandler=(e)=>
  {
    e.preventDefault();
    var FormData=
    {
      name:`${userData.name}`,
      email:`${userData.email}`,
      phone:`${userData.phone}`

    }
    axios.put(`${url}/${idno}`,FormData)
    .then(() =>{
    //  window.alert("....CREATED....") 
     props.history.push('/hooksuser')
    })
  }
    
        
        var {name,email,phone,txtConfirmation}=userData

        return(<>
        <div className='container p-5'>
          <h2 className='container text-center p-5'>This Is Edit Component Page</h2>
          <form onSubmit={submitHandler.bind(this)}>
          {/* <div class="mb-3">
          <label class="form-label">ID</label>
          <input type="number" class="form-control" 
          value={id}
          onChange={this.unameHandling.bind(this)} />
          </div> */}
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
          onChange={formDatahandling.bind(this)} />
          </div>
          <div class="mb-3">
          <label class="form-label">PHONE</label>
          <input type="number" class="form-control" 
          value={phone} name="phone"
          onChange={formDatahandling.bind(this)} />
          </div>
          <div class="mb-3">
          <Link className='btn btn-success mx-2' to="/hooksuser">GOTO BACK</Link>
          <button type="submit" class="btn btn-warning text-white" value="update">UPDATE</button>
          </div>
          </form>
        </div>
        </>)
    }
    

