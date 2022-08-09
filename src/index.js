import  ReactDOM  from "react-dom";
// import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Assets/css/bootstrap-icons.css'

import Routings from "./Components/Routings.js";

import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(<Provider store={store}>
    <Routings />
</Provider>, document.getElementById('root'))



