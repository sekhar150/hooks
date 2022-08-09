import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

//Global Variable
var idno;
class View extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
          viewdata:{}
        }
    }
    render()
    {
        idno=this.props.match.params.idno
        //this.props-->history,location,match
        console.log(idno)
        var {id,name,email}=this.state.viewdata
        return(<>
        <div className='container p-5'>
          <h2>This Is View Component Page</h2>
          <p>{idno} th Record data</p>
          <ul>
              <li>{id}</li>
              <li>{name}</li>
              <li>{email}</li>
              
          </ul>
          <Link className='btn btn-success' to="/restapi">GOTO BACK</Link>
        </div>
        </>)
    }
    componentDidMount()
    {
       const url=`http://localhost:3001/users/${idno}`

        axios.get(url).then( (result) => this.setState({viewdata:result.data}))
    }
}
export default View;