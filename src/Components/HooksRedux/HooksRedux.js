import React, { useEffect } from 'react'

import {connect} from 'react-redux'
//Step-4
import EmpAction from './../../action/empAction.js'

import UserAction from './../../action/usersAction'

import StudentAction from './../../action/studentsAction'


import { bindActionCreators } from 'redux'

let HooksRedux = (props) => {

    useEffect(()=>{

            props.EmpAction()
            props.UserAction()
            props.StudentAction()
          
    },[])
    
    return (
        <div className='container p-5'>
      <h2 className='text-center'>ReactReduxConnection Example</h2>

      <h4 className='text-center'>synchronus Data From Redux_Actions</h4>
      {
        props.empdata.map((res,i)=>
        {
          return(<ul key={i}>
              <li>{res.id}</li>
              <li>{res.name}</li>
              <li>{res.email}</li>
          </ul>)

        })
      }
      <h4 className='text-center'>Asynchronus Data-1[Global-RestApi] From Redux_Actions</h4>
      {
        props.userdata.map((res,i)=>
        {
          return(<ul key={i}>
              <li>{res.id}</li>
              <li>{res.name}</li>
              <li>{res.email}</li>
          </ul>)

        })
      }
      <h4 className='text-center'>Asynchronus Data-2[local-RestApi] From Redux_Actions</h4>
      {
        props.studentdata.map((res,i)=>
        {
          return(<ul key={i}>
              <li>{res.id}</li>
              <li>{res.name}</li>
              <li>{res.email}</li>
          </ul>)

        })
      }
        </div>
    )
  }

//Step-3
//Get The Data From The Redux_Store By Using Reducers
const mapStateToProps=(state)=>
{
  console.log(state)
  return({
    empdata:state.empReducer,
    userdata:state.userReducer,
    studentdata:state.studentReducer
  })
}
//Calling Redux_Actions
const mapDispatchToProps=(dispatch)=>
{
  return bindActionCreators({EmpAction,UserAction,StudentAction},dispatch)
}
//Step-2
export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux)