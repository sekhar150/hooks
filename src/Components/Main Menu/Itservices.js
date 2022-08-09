import React from "react";

import WebApplication from "./IT-SERVICES/Web Application";

import MobileApplication from "./IT-SERVICES/Mobile Applications";

import DesignApplication from "./IT-SERVICES/Design Application"

import {Link,BrowserRouter,Route,Switch,Routes} from "react-router-dom"


var Services=[
    {
        title:"Web Application Services",
        routeName:"/web-app"
    },
    {
        title:"Mobile Application Services",
        routeName:"/mobile-app"
    },
    {
        title:"UX/UI Design Services",
        routeName:"/UX-UI"
    },
    {
        title:"Project Support Services",
        routeName:"/support"
    }
]
function Itservices()

{
    return(<>
           <BrowserRouter>
    <div className="container-fluid p-4">
    <h2>IT SERVICES</h2>
    <p>Information technology service management are the activities that are performed by an organization to design, build, deliver, operate and control information technology services offered to customers. </p>
    {/* <div className="container my-5"> */}
    
    <div className="row">

        <div className="col-lg-3">

        {/* <ul className="list-group">
  <li className="list-group-item">
      <Link to="/itservices/web-app">Web Application Services</Link>
  </li>
  <li className="list-group-item">
      <Link to="/itservices/mobile-app">Mobile Application Services</Link>
      </li>
      <li className="list-group-item">
      <Link to="/itservices/UX-UI">UX/UI Design Services</Link>
      </li>
      <li className="list-group-item">
      <Link to="/itservices/support">Project Support Service</Link>
      </li>
   </ul> */}
   <ul className="list-group">
   {
       Services.map((data,i)=>
       {
           return(<li className="list-group-item">
           <Link to={`/itservices${data.routeName}`}>{data.title}</Link>
           </li>)
       })
   }
   </ul>
        </div>
        <div className="col-lg-9">
           {/* Nested Router */}
           <Switch>
               <Route exact path="/itservices" component={WebApplication} />
               <Route exact path="/itservices/web-app" component={WebApplication} />
               <Route exact path="/itservices/mobile-app" component={MobileApplication} />
               <Route exact path="/itservices/UX-UI" component={DesignApplication} />
               <Route exact path="/itservices/support" render={()=><h2>This is Project Support Service</h2>} />
           </Switch>
           
           {/* Nested Router */}
           

        </div>
    </div>
    </div>
    
   
    </BrowserRouter>
    
    </>)
}
export default Itservices;