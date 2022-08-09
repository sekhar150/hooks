import React,{setState} from 'react';



class Myclass extends React.Component

{
    
    //constructor
    constructor(props)
    {
      super(props);
      //State Object Initialization
      this.state=
      {
        email:"sekhar@gmail.com",
        phone:7386034836
      }
    }
    setChanges=() =>
    {
        this.setState({
            email:"sekhar150@gmail.com",
            phone:8328632801
        })
    }
    //prepare the component input
    render()
    {
        
        return(<>
        <div className="container">
        <h1>React Class Component & State & Events</h1>

        {/*Access State Object Properties From JSX*/}
        <p>Email is: {this.state.email}</p>
        {/*Change State Object Properties By SetState()*/}
        <button onClick={() => this.setState({email:"Sekhar150@gmail.com"}) }>Change My Email</button>

        <br /><br />

        <p>Mobile No is: {this.state.phone}</p>
        {/*Change State Object Properties By SetState()*/}
        <button onClick={() => this.setState({phone:8328632801}) }>Change My Phone Number</button>
         <br /><br />
        <button onClick={() => this.setChanges()}>Update All State Properties</button>

        </div>

        </>)
    }
}
export default Myclass;