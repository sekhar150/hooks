import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const url=`http://localhost:3001/users`

//Global Variable
var idno;
class Edit extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            name:'',
            email:'',
            phone:'',
            txtConfirmation:''
          }
        }
        //Name_input_Textbox
  unameHandling=(e)=>
  {
    this.setState({name:e.target.value})
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
      'name':this.state.name,
      'email':this.state.email,
      'phone':this.state.phone

    }
    axios.put(`${url}/${idno}`,FormData)
    .then(() =>{
    //  window.alert("....CREATED....") 
     this.props.history.push('/restapi')
    })
  }
    render()
    {
        idno=this.props.match.params.idno
        //this.props-->history,location,match
        console.log(idno)
        var {name,email,phone,txtConfirmation}=this.state

        return(<>
        <div className='container p-5'>
          <h2 className='container text-center p-5'>This Is Edit Component Page</h2>
          <form onSubmit={this.submitHandler.bind(this)}>
          {/* <div class="mb-3">
          <label class="form-label">ID</label>
          <input type="number" class="form-control" 
          value={id}
          onChange={this.unameHandling.bind(this)} />
          </div> */}
          <div class="mb-3">
          <label class="form-label">NAME</label>
          <input type="text" class="form-control"
          value={name} 
          onChange={this.unameHandling.bind(this)} />
          </div>
          <div class="mb-3">
          <label class="form-label">EMAIL</label>
          <input type="email" class="form-control" 
          value={email}
          onChange={this.emailHandling.bind(this)} />
          </div>
          <div class="mb-3">
          <label class="form-label">PHONE</label>
          <input type="number" class="form-control" 
          value={phone}
          onChange={this.phoneHandling.bind(this)} />
          </div>
          <div class="mb-3">
          <Link className='btn btn-success mx-2' to="/restapi">GOTO BACK</Link>
          <button type="submit" class="btn btn-warning text-white" value="update">UPDATE</button>
          </div>
          </form>
        </div>
        </>)
    }
    componentDidMount()
    {
       

        axios.get(`${url}/${idno}`).then( (result) => this.setState(result.data))
    }
}
export default Edit;