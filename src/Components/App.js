import React,{useEffect, useState} from 'react'
import {auth} from './../firebase'
import Signin from './A sigin' 
import Home from './Main Menu/Home.js'


const App = () => {

  const[presentUser,setPresentUser]=useState(null)

  useEffect=()=>
  {
    auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null)
    }
    })
  }
  return (
    <div>
      <center>
        {presentUser ? <Home presentUser={presentUser}/>:<Signin/>}
      </center>
    </div>
    
  )
}
export default App;

