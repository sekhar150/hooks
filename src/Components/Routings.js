// Routing_js
import React from "react";
import './../Assets/css/custom.css'

// Component_Nesting_into_Routings||Functional_Components
import Header from './Main Menu/Header.js'
import Footer from './Main Menu/Footer.js'
import Home from './Main Menu/Home.js'
// import About from './Main Menu/About.js'
// import Services from './Main Menu/Services.js'
// import Contact from './Main Menu/Contact.js'
// import Pagenotfound from './Pagenotfound.js'
import Itservices from "./Main Menu/Itservices"

//Class_Components

// import Myclass from "./Myclass";
// import Lifecycle from './Lifecycle';
// import Restapi from "./Main Menu/Restapi";
// import View from "./Main Menu/RESTAPI/View";
// import Edit from './Main Menu/RESTAPI/Edit'
// import SignUp from './SignUp'
// import SignIn from "./Sign In";
import Reactbootstrap from "./Main Menu/Reactbootstrap";


import { BrowserRouter,Route, Switch,Redirect } from "react-router-dom"

//React Hooks
import RHuseState from './Main Menu/useStateHooks'
import RHuseEffect from './Main Menu/useEffectHooks'
import Pagination from './Main Menu/Pagination'
import HooksUser from './HooksAPI/HooksUser'
import Hooksview from './HooksAPI/Hooksview';
import Hooksedit from  './HooksAPI/Hooksedit'
import HooksSignup from "./HooksAPI/HooksSignup";
import HooksRedux from './HooksRedux/HooksRedux'
import Login from './login form' 
import Reactcontact from "./Reactcontact";
import Singnup from "./A singnup";
import Signin from "./A sigin";
import App from "./App";
import RHuseReducer  from './../Components/Main Menu/useReducer'
import UseMemo from "./Main Menu/usememo";
// import UseCallback from "./Main Menu/useCallback"
import UseApp from "./Main Menu/useApp";
import ComponentC from "./Main Menu/ComponentC";
import Material from './Main Menu/material'
import Loginsignup from "./Main Menu/login signup";
// Routing_Setup
function Routings()
{

    return (<BrowserRouter>
    <Header />

       <Switch>
         
          {/* <RHuseState /> */}
          <Route path="/home" component={Home} />
          {/* <RHuseState /> */}
          <Route path="/rhuseState" component={RHuseState} />
          {/* <RHuseEffect /> */}
          <Route path="/rhuseEffect" component={RHuseEffect} />
          {/* <Pagination /> */}
          <Route path="/pagination" component={Pagination} />
          {/* <HooksUser /> */}
          <Route exact path="/hooksuser" component={HooksUser} />
          <Route path="/hooksuser/view/:idno" component={Hooksview} />
          <Route path="/hooksuser/edit/:idno" component={Hooksedit} />
          {/* <Signup /> */}
          <Route path="/hookssignup" component={HooksSignup} />
          {/* <HooksRedux /> */}
          <Route path="/hooksredux" component={HooksRedux} />
          {/* <HooksRedux /> */}
          <Route path="/login" component={Login} />
          {/* <ReactConnect /> */}
          <Route path="/reactcontact" component={Reactcontact} />
          {/* <ReactConnect /> */}
          <Route path="/signup" component={Singnup} />
          {/* <ReactConnect /> */}
          <Route path="/signin" component={Signin} />
          {/* <App /> */}
          <Route path="/app" component={App} />
          {/* <RHuseReducer /> */}
          <Route path="/rhuseReducer" component={RHuseReducer} />
          {/* <RHuseMemo /> */}
          <Route path="/usememo" component={UseMemo} />
          {/* <useApp /> */}
          <Route path="/useapp" component={UseApp} />
          {/* <material /> */}
          <Route path="/material" component={Material} />
          {/* <Create Signup Page /> */}
          <Route path="/loginsignup" component={Loginsignup} />
          {/* <useCallback />
          <Route path="/usecallback" component={UseCallback} /> */}
          {/* <Reactbootstrap /> */}
          <Route path="/rb" component={Reactbootstrap} />
          {/*Auto Redirect To Home Component If Invalid Path From URL Address*/}
          <Redirect to="/home"/> 
          </Switch>

          <Footer />

        </BrowserRouter>
    )
    
    
}

export default Routings;