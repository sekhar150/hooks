import React,{Component} from "react";

class Lifecycle extends Component
{
    //Constructor is Mounting Method
    constructor(props)
    {
        super(props)
        this.state={}
        console.log(`*******Constructor is Mounting Method*******`)
    }
    componentWillMount()
    {
        console.log(`*******componentWillMount is Mounting Method*******`)
    }
    //Render is Mounting Method
    render()
    {
        console.log(`*******Render is Mounting Method*******`)
        return(<>
        
        <div className="p-5 text-center">
         <h2>React Class Component Life Cycle Process </h2>
        </div>

        </>)
    }
    componentDidMount()
    {
        console.log(`*******componentDidMount is Mounting Method*******`)
    }
}
export default Lifecycle;