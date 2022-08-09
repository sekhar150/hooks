import axios from 'axios'
import React, { Component } from 'react'

const url=`http://localhost:3001/users`

export default class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = 
    {
      uname:'',
      email:'',
      phone:'',
      txtConfirmation:''
    }
  }
  //Name_input_Textbox
  unameHandling=(e)=>
  {
    this.setState({uname:e.target.value})
  }
  //Email_Input_Textbox
  emailHandling=(e)=>
  {
    this.setState({email:e.target.value})
  }
  //Phone_Input_Textbox
  phoneHandling=(e)=>
  {
    this.setState({phone:e.target.value})
  }
  submitHandler=(e)=>
  {
    e.preventDefault();
    var FormData=
    {
      'name':this.state.uname,
      'email':this.state.email,
      'phone':this.state.phone

    }
    alert(JSON.stringify(FormData))
    // axios.post(url,fordata)
    // .then(()=>window.alert("....CREATED...."))
    // .catch(()=>window.alert("....ERROR...."))

    /*axios.post(url,FormData)
    .then(()=>this.setState({txtConfirmation:'ACCOUNT CREATED'}))
    .catch(()=>this.setState({txtConfirmation:'ACCOUNT FAILED'}))*/

    axios.post(url,FormData)
    .then(() =>{
     window.alert("....CREATED....") 
     this.props.history.push('/restapi')
    })
  }
  render() {
    console.log(this.props)
    //Destructuring
    var {uname,email,phone,txtConfirmation}=this.state
    return (
      <div className='container p-5'>

        <h2 className='py-3 text-center'>User Registration</h2>
        <div className='container w-50'>
        <form onSubmit={this.submitHandler.bind(this)}> 
          <div class="mb-3">
          <label class="form-label">NAME</label>
          <input type="text" class="form-control" 
          value={uname} 
          onChange={this.unameHandling.bind(this)} />
        </div>

        <div class="mb-3">
          <label class="form-label">EMAIL</label>
          <input type="email" class="form-control"  
          value={email} 
          onChange={this.emailHandling.bind(this)}/>
        </div>

        <div class="mb-3">
          <label class="form-label">PHONE NUMBER</label>
          <input type="number" class="form-control" 
          value={phone} 
          onChange={this.phoneHandling.bind(this)} />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
          <p className='text-primary'>{txtConfirmation}</p>
        </div>
        </form>
        </div>
      </div>
    )
  }
}
