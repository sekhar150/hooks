import React from "react";

import {Link,NavLink} from "react-router-dom"

function Header()

{

var MenuNames=["RHuseState","RHuseEffect","Pagination","HooksUser","HooksSignup","HooksRedux","Login","ReactContact","Signup","App","RHuseReducer","UseMemo","UseCallback","UseApp","Material","Loginsignup"]

    return(
        <>
<nav className="navbar navbar-expand-lg"
style={
  {
  backgroundColor:"darkblue",
  borderBottom:"1px solid black",
  borderTop:"1px solid black"

}
}
>
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
      
        {/* <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={{backgroundColor:'black'}} className="nav-link text-light" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/itservices">ITServices</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" activeClassName="bg-dark" to="/contact">Contact</NavLink>
        </li> */}

         <ul className="navbar-nav">

{

  MenuNames.map((data,i)=> 

  <li className="nav-item px-auto" key={i}>
   <NavLink className="nav-link active text-light" to={`/${data.toLowerCase()}`}>{data}</NavLink>
 </li>)
}

</ul>
       <ul className="sekhar">
        <li className="nav-item">
          <a className="nav-link text-danger justify-content-end" active="text-danger" href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" active="text-danger" href="https://www.google.com/"><i class="bi bi-google"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" active="text-danger" href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" active="text-danger" href="https://twitter.com/"><i class="bi bi-twitter"></i></a>
        </li>
</ul>
     

    </div>
  </div>





  {/* <div className="container-fluid">
    
    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div> */}
</nav>
     
        </>
    )
}
export default Header;