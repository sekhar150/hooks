import {React,useState} from 'react'

export default (props) => {
    //state_object Implementation
    var[stateEmail,setStateEmail]=useState("sekhar@gmail.com")
    let handleStateEmail = () =>
    {
        setStateEmail("somasekhar@gmail.com")
    }
  return (<>
       <div className='container p-5'>

       <h1>React Hooks UseState</h1>

       {stateEmail}<br></br><br></br>
       
       <button onClick={handleStateEmail}>Update Email</button>
       </div>
    </>)
}

