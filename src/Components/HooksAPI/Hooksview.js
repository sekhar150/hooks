import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

//Global Variable
var idno;

export default (props) => {

    
       var [userData,setStateuserData]=useState({
           id:'',
           name:'',

           email:'',
           phone:''
       })
    
       let {idno}=useParams()

       let {id,name,email,phone}=userData
       useEffect(() =>
    {
       const url=`http://localhost:3001/users/${idno}`

        axios.get(url).then( (result) => setStateuserData(result.data))

    },[])
    
    
        return(<>
        <div className='container p-5'>
          <h2>This Is View Component Page</h2>
          <p>{idno} th Record data</p>
          <ul>
              <li>{id}</li>
              <li>{name}</li>
              <li>{email}</li>
              <li>{phone}</li>
          </ul>
          <Link className='btn btn-success' to="/hooksuser">GOTO BACK</Link>
        </div>
        </>)
}
