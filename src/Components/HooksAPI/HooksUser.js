import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
//Global_Variable For RESTAPI_URL
const url=`http://localhost:3001/users`//array_type_of_object

export default ()=>
{
    {
       let [userData,setStateuserData]=useState([])

       let getData = () =>
       {
        axios.get(url).then((result) => setStateuserData(result.data))
       }
        
    useEffect(()=>{getData()},[])

    let DeleteHandler= (id) =>
    {
     
     if(window.confirm(`Delete The Record number is ${id}?`))
     {
        axios.delete(`${url}/${id}`)
        getData()
     }
    }
        return(<>
            <div className='container p-5'>
                <h3 className='text-center'>Fetch Restapi Data Using Local URL/Client</h3>

                <table className='table table-dark table-bordered my-5'>

                    <thead className='table table-light'>
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th colSpan="3" className='text-center'>ACTION</th>
                        </tr>
                    </thead>
               
               <tbody>
               {
                   userData.map( (res,i)=>{
                       return(<tr key={i}>
                           <td>{i+1}</td>
                           <td>{res.name}</td>
                           <td>{res.email}</td>
                           <td>{res.phone}</td>
                           <td>
                               <Link to={`/hooksuser/view/${res.id}`} className='btn btn-primary'>view</Link>
                           </td>
                           <td>
                               <Link to={`/hooksuser/Edit/${res.id}`} className='btn btn-warning'>Edit</Link>
                           </td>
                           <td>
                               <button onClick={ ()=> DeleteHandler(res.id)} className='btn btn-danger'>Delete</button>
                           </td>



                       </tr>)
                   })
               }
               </tbody>
           </table>
            </div>
            </>)
    }
   
    }